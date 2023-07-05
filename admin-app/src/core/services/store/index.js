import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth/moduleAuth";
import order from "./order/moduleOrder";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    order,
    htmlClass,
    config,
    breadcrumbs
  },
  strict: process.env.NODE_ENV !== "production"
});
