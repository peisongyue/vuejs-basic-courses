import Vue from "vue";
import Router from "vue-router";
import { pages } from "./page.js";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/qibu",
  },
  ...pages,
  {
    path: "*",
    component: () => import("../components/Error.vue"),
  },
];

const $router = new Router({ routes });

export default $router;
