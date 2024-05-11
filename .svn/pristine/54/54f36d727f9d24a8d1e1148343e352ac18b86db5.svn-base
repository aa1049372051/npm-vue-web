<script setup>
import HelloWorld from "./components/HelloWorld.vue";
// import { WGridView } from "@my-plugins/vue-web";
import { WGridView, WOssUpload, WArea, utils } from "../dist/vue-web";
console.log(utils.getBeforeTimeStartEnd);
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
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <WArea></WArea>
    <!-- <WOssUpload
      importType="Web"
      :my-file="{
        importType: '.png,.jpg',
        listType: 'text',
        fileCount: 1,
        ID: 0,
      }"
      :show-tips="false"
      :is-open-screenshot="false"
      :show-file-name="false"
    >
      <el-button link type="primary">上传</el-button>
    </WOssUpload> -->
    <WGridView :javaApi="javaApi" :columns="columns"></WGridView>
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
