// 导入组件，组件必须声明 name
import WOssUpload from "./src/main.vue";

// 为组件添加 install 方法，用于按需引入
WOssUpload.install = function (Vue: any) {
  Vue.component(WOssUpload.name, WOssUpload);
};

export default WOssUpload;
