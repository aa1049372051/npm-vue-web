import{j as n}from"./jsx-runtime-CsGkrc1M.js";import{useMDXComponents as o}from"./index-B8OuUyW_.js";import{M as r,P as l,C as p,d as t}from"./index-DfCAL8OO.js";import{W as a,B as m,F as d}from"./wossupload.stories-DYNHe_lJ.js";import"./index-lToYTJ1z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BNirhUHX.js";import"../sb-preview/runtime.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DXimoRZY.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";import"./httpV2-D5Gy0SDP.js";import"./pinia-DGaUwuEM.js";import"./vue.esm-bundler-CNtYpaDd.js";import"./index-fs5yZWyj.js";import"./oss-Wjqv1uCe.js";import"./word-URG0C6V6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-545FAT7W.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:a}),`
`,n.jsx(e.h1,{id:"文件上传",children:"文件上传"}),`
`,n.jsx(e.p,{children:"文件上传组件"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(p,{}),`
`,n.jsx(e.h1,{id:"页面引用",children:"页面引用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {  WOssUpload } from "@my-plugins/vue-web";

`})}),`
`,n.jsx(e.h1,{id:"上传基本用法",children:"上传基本用法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<template>
      <WOssUpload
        ref="uploadRef"
        importType="Web"
        :my-file="{
          importType: '.png,.jpg',
          listType: 'text',
          fileCount: 1,
        }"
        :show-tips="false"
        :show-file-name="false"
        @uploadSuccess="(files)=>{console.log('上传成功',files)}"
      >
        <el-button link type="primary">上传</el-button>
      </WOssUpload>
</template>
`})}),`
`,n.jsx(e.h1,{id:"获取文件列表",children:"获取文件列表"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { ref } from "vue";
const uploadRef = ref();
//父组件中获取上传文件列表
uploadRef.value.fileList
//判断是否在上传 true在上传/false不在
uploadRef.value.isStart  

`})}),`
`,n.jsx(e.h1,{id:"实现用户上传",children:"实现用户上传"}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h1,{id:"filelist初始化文件",children:"fileList初始化文件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<template>
      <WOssUpload
        importType="Web"
        :my-file="{
          importType: '.png,.jpg',
          listType: 'text',
          fileCount: 1,
          fileList: [
        {
          filePath:
            "https://img2.baidu.com/it/u=257191799,4243921961&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=854",
          fileName: "1.jpg",
        },
      ],
        }"
        :show-tips="false"
        :show-file-name="false"
      >
        <el-button link type="primary">上传</el-button>
      </WOssUpload>
</template>
`})}),`
`,n.jsx(e.h1,{id:"实现用户上传-1",children:"实现用户上传"}),`
`,n.jsx(t,{of:d})]})}function L(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{L as default};
