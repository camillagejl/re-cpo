import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WorkInProgressOverview from "../views/WorkInProgressOverview";
import EditRecipe from "../views/EditRecipe";
import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/wip-overview",
    name: "WorkInProgressOverview",
    component: WorkInProgressOverview,
  },
  {
    path: "/recipes/:recipe/:version",
    name: "EditRecipe",
    component: EditRecipe,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
