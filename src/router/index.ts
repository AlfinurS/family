import { createRouter, createWebHistory } from "vue-router";
import User from "@/components/User.vue";
const routes = [
  {
    path: "/",
    name: "User",
    component: User,
  },
  {
    path: "/userpreview",
    name: "UserPreview",
    component: () => import("@/components/UserPreview.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
