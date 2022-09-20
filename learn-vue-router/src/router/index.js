import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Details from "../views/Details.vue"
import Bar from "../views/Bar.vue"
import Foo from "../views/Foo.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    components: {
      default: Home,
      one: Bar,
      two: Foo
    },
  },
  {
    path: "/user/:id",
    component: User,
    children: [
      {
        path: "foo",
        component: Foo
      },
      {
        path: "bar",
        component: Bar
      }
    ]
  },
  {
    path: "/details/:id",
    component: Details,
    // props: true
    // props: {
    //   id: '111'
    // }
    props(route) {
      console.log(route);
      return {
        id: route.params.id
      }
    }
  }
];

const router = new VueRouter({
  routes,
});

export default router;
