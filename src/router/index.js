import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegisterPerson from "../views/RegisterPerson";
import ListPeople from "../views/ListPeople";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "RegisterPerson",
    component: RegisterPerson,
  },
  {
    path: "/listPeople",
    name: "RegisterPerson",
    component: ListPeople,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
