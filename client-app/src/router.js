import Vue from "vue";
import Router from "vue-router";
import authStore from "@/core/services/store/auth/moduleAuth";
import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";
import store from "@/core/services/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/Dashboard.vue"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/tests",
          name: "tests",
          component: () => import("@/view/pages/tests/TestsList.vue"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/settings",
          name: "settings",
          component: () => import("@/view/pages/settings/Settings.vue"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/book-appointment",
          name: "book-appointment",
          component: () =>
            import("@/view/pages/appointments/BookAppointment.vue"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/book-test",
          name: "book-test",
          component: () =>
              import("@/view/pages/appointments/BookTest.vue"),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: "/booked-test/:id",
          name: "book-test",
          component: () =>
              import("@/view/pages/appointments/Test.vue"),
          meta: {
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: "/index",
      name: "index",
      component: () =>
          import("@/view/pages/homepage/Index.vue")
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/custom-error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue")
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/view/pages/auth/Login"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/Login")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue"),
    }
  ]
});

router.beforeEach((to, from, next) => {
  // reset config to initial state
  store.dispatch(RESET_LAYOUT_CONFIG);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (authStore.state.token) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
