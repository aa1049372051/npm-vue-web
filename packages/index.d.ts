
declare module '@my-plugins/vue-web' {
  import { DefineComponent } from 'vue';

  const WOssUpload: DefineComponent<{
    // 定义 props  
    myFile?: {};
  }, {
    // 定义组件的 data、computed、methods 等  
    // 例如:  
    //   myMethod(): void;  
    fileList: Array<any>;
  }, unknown, {}>;

  const WGridView: DefineComponent<{
    // 定义 props  
  }, {
    // 定义组件的 data、computed、methods 等  
    // 例如:  
    //   myMethod(): void;  
  }, unknown, {}>;
  const StatusTips: DefineComponent<{
    // 定义 props  
  }, {
    // 定义组件的 data、computed、methods 等  
    // 例如:  
    //   myMethod(): void;  
  }, unknown, {}>;
  const WArea: DefineComponent<{
    // 定义 props  
  }, {
    // 定义组件的 data、computed、methods 等  
    // 例如:  
    //   myMethod(): void;  
  }, unknown, {}>;
  const Editor: DefineComponent<{
    // 定义 props  
  }, {
    // 定义组件的 data、computed、methods 等  
    // 例如:  
    //   myMethod(): void;  
  }, unknown, {}>;
  const FileList: DefineComponent<{
    // 定义 props  
  }, {
    // 定义组件的 data、computed、methods 等  
    // 例如:  
    //   myMethod(): void;  
  }, unknown, {}>;

  const utils:{}
  const plugins:{}

  export {
    WGridView,
    StatusTips,
    WArea,
    WOssUpload,
    Editor,
    utils,
    plugins,
    FileList
  };
}
