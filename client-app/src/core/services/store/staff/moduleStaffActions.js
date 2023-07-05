import axios from "../../../../axios";

export default {
  addStaff({ commit }, staff) {
    return new Promise((resolve, reject) => {
      axios
        .post("/users", staff)
        .then(response => {
          commit(
            "ADD_STAFF",
            Object.assign(staff, {
              id: response.data.data.id,
              createdAt: response.data.data.createdAt
            })
          );
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchStaffs({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get("/users", {
          params: {
            currentPage: payload.currentPage,
            pageLimit: payload.itemsPerPage,
            search: payload.search,
            start: payload.start,
            end: payload.end
          }
        })
        .then(response => {
          commit("SET_STAFFS", response.data.data.docs);
          commit("SET_STAFFS_TOTAL", response.data.data.total);
          commit("SET_NUMB_PAGES", response.data.data.pages);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchStaff({ commit }, staffId) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/users/${staffId}`)
        .then(response => {
          commit("SET_STAFF", response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  updateStaff({ commit }, staff, staffId) {
    return new Promise((resolve, reject) => {
      axios
        .put(`/users/${staffId}`, staff)
        .then(response => {
          commit("UPDATE_STAFF", response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
