import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import ElementPlus from "element-plus";
// 基础样式
import '@/styles/index.scss';

// element样式
import "element-plus/lib/theme-chalk/index.css";

// 将有需要的东西加载进来后全部塞到 public index.html 的 id(app)
// 主入口 -- 如有全局依赖可往这里面＋
createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
