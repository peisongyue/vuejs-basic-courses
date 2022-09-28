import qibu from "../Views/Qibu.vue";
export const pages = [
  {
    path: "/qibu",
    component: qibu,
    children: [
      {
        path: "foo/:username",
        component: () => import("../Views/qibu/Foo.vue"),
      },
      {
        path: "bar/:username",
        component: () => import("../Views/qibu/Bar.vue"),
      },
    ],
  },
  {
    // path: "/dongTaiRouterChange/:id",
    // path: "/dongTaiRouterChange/:id/post/:post_id",
    // path: "/dongTaiRouterChange/:id/post/:post_id",
    path: "/dongTaiRouterChange:id",
    component: () => import("../Views/DongTaiRouterChange.vue"),
  },
];
