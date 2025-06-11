import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import UserPage from "@/views/UserPage/UserPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/user",
  },
  {
    path: "/user",
    name: "User",
    component: UserPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
