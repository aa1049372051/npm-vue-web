<script setup>
import { ref, watch, onMounted } from "vue";
const myfile = ref();
import HelloWorld from "./components/HelloWorld.vue";
// import { WGridView } from "@my-plugins/vue-web";
// import {
//   WGridView,
//   WOssUpload,
//   WArea,
//   utils,
//   plugins,
//   FileList,
//   Editor,
// } from "@my-plugins/vue-web";
// import "@my-plugins/vue-web/lib/style.css";
// 引用vue-web样式
// import "../lib/style.css";
import {
  WGridView,
  WOssUpload,
  // WArea,
  utils,
  plugins,
  FileList,
  Editor,
} from "../packages/index";
console.log(plugins, utils);
onMounted(() => {
  setTimeout(() => {
    const focusController = new utils.tableKeyboard("myTableId", {
      pageKeyboardShortcuts(event) {
        console.log(event);
      },
    });
  }, 2000);
});
const javaApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          name: "g",
          age: 100,
        },
      ]);
    }, 2000);
  });
};
let columns = [
  {
    label: "名称",
    prop: "name",
  },
  {
    label: "年龄",
    prop: "age",
  },
];
let tableData = ref([
  {
    label: "名称",
    prop: "name",
  },
  {
    label: "年龄",
    prop: "age",
  },
]);
const content = ref("");
watch(content, (value) => {
  console.log(value);
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <!-- <el-row>
      <Editor style="height:200px" v-model="content"></Editor>
    </el-row> -->
    <!-- <WArea></WArea> -->
    <el-table
      :cell-class-name="
        (data) => {
          return utils.tableKeyboard.cellClassName(data, {
            notCanMove: ['name2', 'name6'],
          });
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
            v-model="scope.row.name"
            style="width: 140px"
            placeholder="Please input"
          />
        </template>
      </el-table-column>
      <el-table-column label="name2" width="180"> </el-table-column>
      <el-table-column label="name3" width="180">
        <template #default="scope">
          <el-input
            v-model="scope.row.name2"
            style="width: 140px"
            placeholder="Please input"
          />
        </template>
      </el-table-column>
      <el-table-column label="name4" width="180">
        <template #default="scope">
          <el-input
            v-model="scope.row.name3"
            style="width: 140px"
            placeholder="Please input"
          />
        </template>
      </el-table-column>
      <el-table-column label="name6">
        <template #default="scope">
          <el-button
            size="small"
            @click="
              () => {
                tableData.push({});
              }
            "
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
