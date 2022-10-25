import { RouteRecordRaw } from "vue-router";
import { Home } from "../components/Home/index";
export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
];
