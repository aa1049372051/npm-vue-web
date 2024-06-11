class TableKeyboard {
    constructor(tableId, options = {}) {
        this.tableId = tableId;
        this.currentInput = null;
        this.table = null;
        this.inputElements = [];
        this.pageKeyboardShortcuts = options.pageKeyboardShortcuts || null
        this.debug = options.debug

        // 初始化  
        this.init();
    }


    init() {
        let tableDiv = document.getElementById(this.tableId);
        this.table = tableDiv.querySelector('.el-table__body')
        if (!this.table) {
            throw new Error('Table not found');
        }
        // 获取表格中的所有input元素  
        this.inputElements = Array.from(this.table.querySelectorAll('input'));
        // 为每个input添加焦点监听器  
        this.inputElements.forEach(input => {
            input.onfocus = () => {
                this.currentInput = input;
            }
        });

        // 绑定键盘事件  
        this.bindKeyboardEvents();
    }

    // 获取当前input的行列位置  
    getPosition(input) {
        let rowIdx = 0;
        let colIdx = 0;
        //所以列都是input的情形
        // for (let i = 0; i < this.inputElements.length; i++) {
        //     if (this.inputElements[i] === input) {
        //         rowIdx = Math.floor(i / this.table.rows[0].cells.length);
        //         colIdx = i % this.table.rows[0].cells.length;
        //         break;
        //     }
        // }
        let $p = input.closest('.el-table__cell')
        let classList = $p.getAttribute('class').split(' ');
        let id = '';
        classList.forEach(item => {
            if (item.indexOf('canKeyMove_') > -1) {
                id = item;
            }
        });
        let idArr = id.split('_');
        rowIdx = parseInt(idArr[1])
        colIdx = parseInt(idArr[2]);
        return {
            rowIdx,
            colIdx
        };
    }

    // 根据行列位置获取input元素  
    getInputByPosition(rowIdx, colIdx) {
        // const inputIndex = rowIdx * this.table.rows[0].cells.length + colIdx;
        // return this.inputElements[inputIndex] || null;
        let className = `canKeyMove_${rowIdx}_${colIdx}`;
        let $col = this.table.querySelector(`.${className}.canKeyMove input`);
        return $col;
    }

    moveFocus(direction, {
        row,
        col,
        bool
    } = {
        row: -1,
        col: -1,
        bool: 0
    }) {
        if (!this.currentInput) {
            return; // 如果没有当前焦点，不执行移动  
        }

        let rowIdx = -1,
            colIdx = -1
        if (bool) {
            rowIdx = row
            colIdx = col
        } else {
            let data = this.getPosition(this.currentInput);
            rowIdx = data.rowIdx
            colIdx = data.colIdx
        }
        this.log(rowIdx, colIdx, 'cur')
        let newRowIdx = rowIdx;
        let newColIdx = colIdx;
        let end = 0;

        switch (direction) {
            case 'up':
                newRowIdx = Math.max(rowIdx - 1, 0);
                if (newRowIdx == 0) {
                    end = 1
                }
                break;
            case 'down':
                let rowlen = this.table.rows.length - 1
                newRowIdx = Math.min(rowIdx + 1, rowlen);
                if (newRowIdx == rowlen) {
                    end = 1
                }
                break;
            case 'left':
                newColIdx = Math.max(colIdx - 1, 0);
                if (newColIdx == 0) {
                    end = 1
                }
                break;
            case 'right':
                let len = this.table.rows[0].cells.length - 1
                newColIdx = Math.min(colIdx + 1, len);
                if (newColIdx == len) {
                    end = 1
                }
                break;
            default:
                return; // 无效的方向  
        }
        this.log(newRowIdx, newColIdx, 'next')
        const newInput = this.getInputByPosition(newRowIdx, newColIdx);
        this.log(newInput)
        if (newInput) {
            newInput.focus();
            this.currentInput = newInput;
        } else {
            if (end) {
                return
            }
            this.moveFocus(direction, {
                row: newRowIdx,
                col: newColIdx,
                bool: 1
            })
        }
    }

    keydownEvent(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.moveFocus('up');
                break;
            case 'ArrowDown':
                this.moveFocus('down');
                break;
            case 'ArrowLeft':
                this.moveFocus('left');
                break;
            case 'ArrowRight':
                this.moveFocus('right');
                break;
            case 'Enter':
                event.preventDefault(); // 阻止默认的表单提交或换行行为  
                this.focusNextInput();
            default:
                this.pageKeyboardShortcuts && this.pageKeyboardShortcuts(event)
                // 不处理其他按键  
        }
    }

    // 绑定键盘事件到表格  
    bindKeyboardEvents() {
        this.table.onkeydown = (event) => {
            this.keydownEvent(event)
        }
    }

    focusNextInput() {
        if (!this.currentInput) {
            return; // 如果没有当前焦点，不执行移动  
        }

        const currentIndex = this.inputElements.indexOf(this.currentInput);
        const nextIndex = (currentIndex + 1) % this.inputElements.length; // 环形聚焦  

        this.inputElements[nextIndex].focus();
        this.currentInput = this.inputElements[nextIndex];
    }

    static cellClassName(data, options = {}) {
        let {
            row,
            column,
            rowIndex,
            columnIndex
        } = data
        row.index = rowIndex;
        let canKeyMove = `canKeyMove_${rowIndex}_${columnIndex} `;
        if (options && options.notCanMove.indexOf(column.label) > -1) {
            return '';
        }
        return `canKeyMove ${canKeyMove} `;
    }

    log() {
        this.debug && console.log.apply(null, arguments)
    }
}

export default TableKeyboard
// 使用示例  
// const TableKeyboard = new TableKeyboard('myTableId');
// table表格上要给cell添加cell-class-name