import { createRouter, createWebHistory } from "vue-router";

import HeroPage from "../components/HeroPage.vue";
import ErrorPage from "../components/ErrorPage.vue"
//import NavBar from "../components/NavigationBar.vue"

const routes = [
  { path: "/", redirect: "/counter" },

  {
    path: "/counter",
    name: "home",
    component: HeroPage,
  },
  {
    path:"/:pathMatch(.*)*",
    name:"errorPage",
    component: ErrorPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
});

export default router;
