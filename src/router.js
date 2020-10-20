import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./pages/Home")
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("./pages/Posts/List")
    },
    {
      path: "/posts/:id",
      name: "post-show",
      component: () => import("./pages/Posts/Detail")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./pages/Posts/Add")
    },
    {
      path: "/callback",
      name: "callback",
      component: () => import("./pages/Auth/Callback")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./pages/Auth/Login")
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("./pages/Auth/Logout")
    },
    {
      path: "/set-profile",
      name: "profile",
      component: () => import("./pages/Auth/SetProfile")
    }
  ]
});