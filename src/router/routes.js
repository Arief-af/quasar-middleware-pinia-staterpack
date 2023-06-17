import guestMiddleware from "src/middleware/guestMiddleware";
import userMiddleware from "src/middleware/userMiddleware";
import authMiddleware from "src/middleware/authMiddleware";
import adminMiddleware from "src/middleware/adminMiddleware";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        meta: {
          middleware: [guestMiddleware],
        },
        name: 'login',
        path: "/login",
        component: () => import("src/pages/Login.vue"),
      },
      {
        meta: {
          middleware: [userMiddleware],
        },
        name: 'home',
        path: "/home",
        component: () => import("pages/Home.vue"),
      },
      {
        meta: {
          middleware: [adminMiddleware],
        },
        name: 'admin',
        path: "/admin",
        component: () => import("pages/Admin.vue"),
      },
      {
        meta: {
          middleware: [userMiddleware],
        },
        name: 'user',
        path: "/user",
        component: () => import("pages/User.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/accessdenied",
    name: "accessDenied",
    component: () => import("pages/AccessDenied.vue"),
  },
];

export default routes;
