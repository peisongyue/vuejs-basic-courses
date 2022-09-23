import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/default/page/1",
  },
];

const $router = new Router({ routes });

export default $router;
