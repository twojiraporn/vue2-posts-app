import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/posts",
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
    }
  ]
});