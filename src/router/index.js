import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegisterUser from "../views/RegisterUser.vue";
import Login from "../views/LoginPage.vue";
import Users from "../views/Users.vue";
import axios from "axios";

function AdminAuth(to, from, next) {
  // Get the user's token from localStorage.
  const token = localStorage.getItem("token");

  // If the token is not present, redirect the user to the login page.
  if (!token) {
    return next("/login");
  }

  // Create a new axios request with the user's token.
  const request = axios.post(
    "http://localhost:8686/validate",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  // Handle the response from the server.
  request
    .then((res) => {
      // If the response is successful, continue to the next route.
      console.log(res);
      next();
    })
    .catch((err) => {
      // If the response is not successful, redirect the user to the login page.
      console.log(err.response);
      next("/login");
    });
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterUser,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
    beforeEnter: AdminAuth,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
