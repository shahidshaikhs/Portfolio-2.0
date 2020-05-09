import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Illustrations from "../views/Illustrations.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
