import{j as n}from"./jsx-runtime-CsGkrc1M.js";import{useMDXComponents as a}from"./index-B8OuUyW_.js";import{M as t,P as o,D as c,C as m,d as p}from"./index-DfCAL8OO.js";import{W as d,B as s}from"./warea.stories-BlqtdHeJ.js";import"./index-lToYTJ1z.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BNirhUHX.js";import"../sb-preview/runtime.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DXimoRZY.js";import"./index-Dv1YWgiV.js";import"./index-DrFu-skq.js";import"./httpV2-D5Gy0SDP.js";import"./pinia-DGaUwuEM.js";import"./vue.esm-bundler-CNtYpaDd.js";import"./index-fs5yZWyj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function i(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:d}),`
`,n.jsx(e.h1,{id:"省市区",children:"省市区"}),`
`,n.jsx(e.p,{children:"选择省市区"}),`
`,n.jsx(o,{}),`
`,n.jsx(e.h1,{id:"description",children:"Description"}),`
`,n.jsx(c,{of:s}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(m,{}),`
`,n.jsx(e.h1,{id:"页面引用",children:"页面引用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import {  WArea } from "@my-plugins/vue-web";

`})}),`
`,n.jsx(e.h1,{id:"方法",children:"方法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`
//获取验证结果
this.$refs.area.validate()

//重置验证
this.$refs.area.reset()

`})}),`
`,n.jsx(e.h1,{id:"基本用法",children:"基本用法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<template>
   <WArea 
    :provinceId.sync="provinceId"  
    :cityId.sync="cityId"  
    :areaId.sync="areaId" 

    :provinceName.sync='provinceName'
    :cityName.sync='cityName'
    :areaName.sync='areaName'

    :isEmpty="true"
    ref="area" 
    :ruleStr="[]">
  </WArea>
</template>
`})}),`
`,n.jsx(p,{of:s})]})}function X(r={}){const{wrapper:e}={...a(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(i,{...r})}):i(r)}export{X as default};
