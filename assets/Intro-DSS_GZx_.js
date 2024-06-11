import{j as n}from"./jsx-runtime-CsGkrc1M.js";import{useMDXComponents as i}from"./index-B8OuUyW_.js";import"./index-lToYTJ1z.js";import"./_commonjsHelpers-Cpj98o6Y.js";function l(s){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"vue-web",children:"vue-web"}),`
`,n.jsx(e.h1,{id:"安装",children:"安装"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Base",children:`pnpm install @my-plugins/vue-web
`})}),`
`,n.jsx(e.h1,{id:"更新",children:"更新"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Base",children:`pnpm update @my-plugins/vue-web
`})}),`
`,n.jsx(e.h1,{id:"引入css",children:"引入css"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import "@my-plugins/vue-web/lib/style.css";
`})}),`
`,n.jsx(e.h1,{id:"utils方法使用",children:"utils方法使用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { utils } from "@my-plugins/vue-web";

const { Toast, formatTime,httpV2 } = utils;

`})}),`
`,n.jsx(e.h1,{id:"如何发布到npm",children:"如何发布到npm"}),`
`,n.jsxs(e.p,{children:["每次修改packages中的源码后,提交npm之前先修改",n.jsx(e.code,{children:"package.json"}),"中的version,然后build再提交到npm中"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"先build"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Base",children:`    pnpm build
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:["设置 ",n.jsx(e.code,{children:"pnpm"})," 的 ",n.jsx(e.code,{children:"registry"})," 为开发源"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Base",children:`    pnpm config set registry http://172.23.50.21:4873/
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsxs(e.li,{children:["执行命令 ",n.jsx(e.code,{children:"pnpm login"})," 登录到 ",n.jsx(e.code,{children:"pnpm"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Base",children:`    pnpm login
`})}),`
`,n.jsxs(e.ol,{start:"4",children:[`
`,n.jsxs(e.li,{children:["执行命令 ",n.jsx(e.code,{children:"pnpm publish"})," 发布到 ",n.jsx(e.code,{children:"pnpm"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Base",children:`    pnpm publish
`})})]})}function p(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{p as default};
