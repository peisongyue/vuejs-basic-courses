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
// mode: "history",
const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  console.log("router index.js beforeEach");
  console.log("beforeEach", to, from);
  if (to.meta.isLogin) {
    const login = true;
    if (!login) {
      alert("请登录！");
      next({
        path: "/qibu",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  console.log("router index.js beforeResolve");
  console.log("beforeResolve", to, from);
  next();
});

router.afterEach((to, from) => {
  console.log("router index.js, afterEach");
  console.log("afterEach", to, from);
});

export default router;
