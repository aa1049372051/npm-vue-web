import{j as n}from"./jsx-runtime-CsGkrc1M.js";import{useMDXComponents as a}from"./index-B8OuUyW_.js";import"./index-DfCAL8OO.js";import"./index-lToYTJ1z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BNirhUHX.js";import"../sb-preview/runtime.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DXimoRZY.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";function l(t){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...a(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"tablekeyboard表格方向键控制",children:"tableKeyboard表格方向键控制"}),`
`,n.jsx(e.h2,{id:"js",children:"js"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { utils } from "@my-plugins/vue-web";
import { ref, onMounted } from "vue";
let tableData = ref([
  {
    label: "名称1",
    prop: "name1",
  },
  {
    label: "名称2",
    prop: "name2",
  },
]);

onMounted(() => {
  setTimeout(() => {
    //实例化对象,参数表格id,
    //options pageKeyboardShortcuts 表格其他快截方式自定义实现，比如ctrl+d删除当前行
    const focusController = new utils.tableKeyboard("myTableId",{
      pageKeyboardShortcuts(event) {
        console.log(event);
      },
    });
    //table属性:cell-class-name 给列绑定class
  }, 2000);
});
`})}),`
`,n.jsx(e.h2,{id:"html",children:"html"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- notCanMove 不会参加键盘事件的列 -->
<el-table
      :cell-class-name="
        (data) => {
          return utils.tableKeyboard.cellClassName(
            data,
            {
              notCanMove: ['name2'],
            }
          );
        }
      "
      border
      id="myTableId"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column label="name1" width="180">
        <template #default="scope">
          <el-input
            v-model="scope.row.name1"
          />
        </template>
      </el-table-column>
      <el-table-column label="name2" width="180"> </el-table-column>
      <el-table-column label="name3" width="180">
        <template #default="scope">
          <el-input
            v-model="scope.row.name3"
          />
        </template>
      </el-table-column>
    </el-table>
`})})]})}function j(t={}){const{wrapper:e}={...a(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(l,{...t})}):l(t)}export{j as default};
