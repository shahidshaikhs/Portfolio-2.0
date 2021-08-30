import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Illustrations from "../views/Illustrations.vue";
import NotFound from "../views/404";
import ScrittorPrivacyPolicy from "../views/ScrittorPrivacyPolicy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/css-illustrations",
    name: "Illustrations",
    component: Illustrations,
  },
  {
    path: "/PrivacyPolicy",
    name: "ScrittorPrivacyPolicy",
    component: ScrittorPrivacyPolicy,
  },
  {
    path: "/*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
