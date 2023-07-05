import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth/moduleAuth";
import staff from "./staff/moduleStaff";
import dashboard from "./dashboard/moduleDashboard";
import htmlClass from "./htmlclass.module";
import config from "./config.module";
import breadcrumbs from "./breadcrumbs.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    staff,
    dashboard,
    htmlClass,
    config,
    breadcrumbs
  },
  strict: process.env.NODE_ENV !== "production"
});
