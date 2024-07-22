import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes.js";
import { cookie } from "@/utils/cookie.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.name === "Login") {
    next();
    return;
  }
  cookie.get("token") ? next() : next({ name: "Login" });
});
export default router;