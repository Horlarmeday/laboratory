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
      redirect: "/login"
    },
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
    {
      path: "",
      component: () => import("@/view/layout/Layout"),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/view/pages/home/edms/Home.vue")
        },
        {
          path: "/add-sample/:id",
          name: "add-sample",
          component: () => import("@/view/pages/sample/AddSample.vue")
        },
        {
          path: "/add-result",
          name: "add-result",
          component: () => import("@/view/pages/results/AddResult.vue")
        },
        {
          path: "/validate-result",
          name: "validate-result",
          component: () => import("@/view/pages/results/ValidateResult.vue")
        },
        {
          path: "/create-sample-type",
          name: "create-sample-type",
          component: () => import("@/view/pages/admin/samples/AddSample.vue")
        },
        {
          path: "/sample-type",
          name: "sample-type",
          component: () => import("@/view/pages/admin/samples/Samples.vue")
        },
        {
          path: "/tests",
          name: "tests",
          component: () => import("@/view/pages/admin/tests/Tests.vue")
        },
        {
          path: "/create-test",
          name: "create-tests",
          component: () => import("@/view/pages/admin/tests/AddTest.vue")
        },
        {
          path: "/book-test",
          name: "book-tests",
          component: () => import("@/view/pages/tests/BookTest.vue")
        },
        {
          path: "/create-user",
          name: "create-user",
          component: () => import("@/view/pages/tests/CreateUser.vue")
        },
        {
          path: "/make-payment",
          name: "make-payment",
          component: () => import("@/view/pages/tests/Payment.vue")
        }
      ]
    },
    {
      path: "/error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue")
        },
        {
          path: "error-2",
          name: "error-2",
          component: () => import("@/view/pages/error/Error-2.vue")
        },
        {
          path: "error-3",
          name: "error-3",
          component: () => import("@/view/pages/error/Error-3.vue")
        },
        {
          path: "error-4",
          name: "error-4",
          component: () => import("@/view/pages/error/Error-4.vue")
        },
        {
          path: "error-5",
          name: "error-5",
          component: () => import("@/view/pages/error/Error-5.vue")
        },
        {
          path: "error-6",
          name: "error-6",
          component: () => import("@/view/pages/error/Error-6.vue")
        }
      ]
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "/",
      component: () => import("@/view/pages/auth/Login-1"),
      children: [
        {
          name: "login",
          path: "/login",
          component: () => import("@/view/pages/auth/Login-1")
        },
        {
          name: "register",
          path: "/auth/register",
          component: () => import("@/view/pages/auth/Register")
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
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
//
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
