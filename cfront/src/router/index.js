import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/login/Login.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/main/Main.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("../views/main/Dashboard.vue"),
        },
        {
          path: "/pwdsetting",
          name: "PwdSetting",
          component: () => import("../views/main/PwdSetting.vue"),
          // meta: { requireAuth: true },
        },
        {
          path: "/transfer",
          name: "Transfer",
          component: () => import("../views/main/Transfer.vue"),
          // meta: { requireAuth: true },
        },
        {
          path: "/transferquery",
          name: "TransferQuery",
          component: () => import("../views/main/TransferQuery.vue"),
          // meta: { requireAuth: true },
        },
      ],
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/error/404.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/error/404.vue"),
    },
  ],
});

// 路由拦截器
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (Boolean(sessionStorage.getItem("uid"))) {
//       next();
//     } else {
//       next({
//         path: "/",
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;
