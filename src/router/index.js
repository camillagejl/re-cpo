import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WorkInProgressOverview from "../views/WorkInProgressOverview";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wip-overview",
    name: "WorkInProgressOverview",
    component: WorkInProgressOverview,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
