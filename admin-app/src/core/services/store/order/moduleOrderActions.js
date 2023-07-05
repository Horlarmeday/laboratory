import axios from "../../../../axios";

export default {
  orderLabTest({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`/users/lab/order`, { payload })
        .then(response => {
          commit("ORDER_LAB_TEST", payload);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  addSelectedTest({ commit }, test) {
    commit("ADD_SELECTED_TEST", test);
  },
  removeSelectedTest({ commit }, test) {
    commit("REMOVE_SELECTED_TEST", test);
  },
  emptySelectedTest({ commit }) {
    commit("EMPTY_SELECTED_TEST", []);
  },
  emptyPatient({ commit }) {
    commit("EMPTY_PATIENT", "");
  },
  addPatient({ commit }, patient) {
    commit("ADD_PATIENT", patient);
  }
};
