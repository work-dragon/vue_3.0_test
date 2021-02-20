import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "@/project/index.vue"),
  },
  {
    path: "/lan",
    name: "lan",
    component: () => import(/* webpackChunkName: "lan" */ "@/project/customStore/index.vue"),
  },
];

export default routes;
