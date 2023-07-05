import state from "./moduleStaffState.js";
import mutations from "./moduleStaffMutations.js";
import actions from "./moduleStaffActions.js";
import getters from "./moduleStaffGetters.js";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
