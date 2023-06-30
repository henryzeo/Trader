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
      ],
    },
  ],
});

export default router;
