import { RouteRecordRaw } from "vue-router";

const Module = require.context("./modules", false, /\.ts/);

let modules: Array<RouteRecordRaw> = [];

Module.keys().forEach(name => {
  const o = Module(name).default;
  modules = modules.concat(o);
});

const routes: Array<RouteRecordRaw> = [...modules];

export default routes;
