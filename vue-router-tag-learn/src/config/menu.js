export default [
  {
    text: "基础",
    children: [
      { text: "起步", to: "/qibu" },
      { text: "动态路由匹配", to: "/dongTaiRouterChange" },
      { text: "嵌套编程式路由", to: "/qiTaoCode" },
      { text: "命名视图 & 命名路由", to: "/nameView" },
      { text: "重定向 & 别名", to: "/redirectAlisa" },
      { text: "组件路由传参", to: "/routerProps" },
    ],
  },
  {
    text: "进阶",
    children: [
      { text: "导航守卫", to: "/routerEye" },
      { text: "路由元信息", to: "/routerMeta" },
      { text: "过度动效", to: "/transition" },
      { text: "数据获取", to: "/getData" },
      { text: "新页签插入位置", to: "/append" },
      { text: "关闭最后的页签", to: "/close-last-tab" },
      { text: "滚动位置", to: "/page-scroller/" },
    ],
  },
  {
    text: "缓存控制",
    children: [
      { text: "页签规则", to: "/default/rule" },
      { text: "页签缓存-禁用", to: "/default/no-cache" },
      { text: "最大缓存数", to: "/max-alive" },
      { text: "复用组件", to: "/reuse" },
    ],
  },
  {
    text: "页面功能",
    children: [
      { text: "动态页签配置", to: "/default/tab-dynamic" },
      { text: "页面离开确认", to: "/initial-tabs/page-leave" },
      { text: "嵌套路由", to: "/default/nest/1" },
    ],
  },
  {
    text: "多语言支持",
    children: [
      { text: "页签国际化", to: "/i18n" },
      { text: "组件语言", to: "/lang-en" },
      { text: "组件自定义语言", to: "/lang-custom" },
    ],
  },
];
