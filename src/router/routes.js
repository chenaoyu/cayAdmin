const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/view/Home/index.vue"),
    redirect: { name: "DashBoard" },
    meta: {},
    children: [
      {
        path: "", // 空路径，表示默认子路由
        name: "DashBoard",
        component: () => import("@/view/DashBoard/index.vue"),
        meta: {label:'看板'},
      },
      {
        path: "One", 
        name: "One",
        component: () => import("@/view/One/index.vue"),
        meta: {label:'页面1'},
      },
      {
        path: "Two", 
        name: "Two",
        component: () => import("@/view/Two/index.vue"),
        meta: {label:'页面2'},
      },
      {
        path: "Three",
        name: "Three",
        component: () => import("@/view/Three/index.vue"),
        meta: {label:'页面3'},
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/view/Login/index.vue"),
  },
];
export default routes;