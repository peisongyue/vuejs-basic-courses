import qibu from "../Views/Qibu.vue";
export const pages = [
  {
    name: "qibu",
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
    name: "dongTaiRouterChange",
    // path: "/dongTaiRouterChange/:id",
    // path: "/dongTaiRouterChange/:id/post/:post_id",
    // path: "/dongTaiRouterChange/:id/post/:post_id",
    path: "/dongTaiRouterChange/:id",
    component: () => import("../Views/DongTaiRouterChange.vue"),
  },
  {
    path: "/qiTaoCode",
    component: () => import("../Views/QiTaoCode.vue"),
    children: [
      {
        path: "bar",
        component: () => import("../Views/QiTaoCode/Bar.vue"),
      },
      {
        path: "foo",
        component: () => import("../Views/QiTaoCode/Foo.vue"),
      },
    ],
  },
  {
    name: "NameView",
    path: "/nameView",
    component: () => import("../Views/NameView.vue"),
    children: [
      {
        name: "nameViewChildren",
        path: "children",
        components: {
          default: () => import("../Views/NameView/default.vue"),
          foo: () => import("../Views/NameView/Foo.vue"),
          bar: () => import("../Views/NameView/Bar.vue"),
        },
      },
      {
        name: "UserSettings",
        path: "settings",
        component: () => import("../Views/NameView/UserSettings.vue"),
        children: [
          {
            name: "UserEmailsSubscriptions",
            path: "emails",
            component: () =>
              import("../Views/NameView/UserEmailsSubscriptions.vue"),
          },
          {
            name: "Profile",
            path: "profile",
            components: {
              default: () => import("../Views/NameView/UserProfile.vue"),
              helper: () => import("../Views/NameView/UserProfilePreview.vue"),
            },
          },
        ],
      },
    ],
  },
  {
    name: "RedirectAlisa",
    path: "/redirectAlisa",
    // redirect: "/qibu",
    // redirect: { name: "qibu" },
    // redirect: (to) => {
    //   // eslint-disable-next-line no-undef
    //   console.log(to);
    //   return "qibu";
    // },
    component: () => import("../Views/RedirectAlisa.vue"),
    alias: "/alisaRedirect",
  },
  {
    name: "RouterProps",
    // path: "/routerProps/:id",
    // path: "/routerProps",
    path: "/routerProps",
    component: () => import("../Views/RouterProps.vue"),
    // props: true,
    // props: { id: "111" },
    props: (route) => {
      // console.log("page.js", route);
      return { id: "111", pp: route.query.pp };
    },
  },
  {
    name: "RouterEye",
    path: "/routerEye",
    component: () => import("../Views/RouterEye.vue"),
    beforeEnter: (to, from, next) => {
      console.log("router route beforeEnter");
      console.log("beforeEnter", to, from);
      next();
    },
  },
  {
    name: "RouterMeta",
    path: "/routerMeta",
    component: () => import("../Views/RouterMeta.vue"),
    children: [
      {
        name: "Meta",
        path: "meta",
        component: () => import("../Views/RouterMeta/Meta.vue"),
        meta: { isLogin: true },
      },
    ],
  },
  {
    name: "Transition",
    path: "/transition",
    component: () => import("../Views/Transition.vue"),
    children: [
      {
        name: "Foo",
        path: "foo",
        component: () => import("../Views/Transition/Foo.vue"),
      },
    ],
  },
  {
    name: "GetData",
    path: "/getData/:id",
    component: () => import("../Views/GetData.vue"),
  },
];
