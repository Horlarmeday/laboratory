import axios from "../../../../axios";

export default {
  fetchStats({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/dashboard/stats")
        .then(response => {
          commit("SET_STATS", response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  fetchDepartures({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/dashboard/departures")
        .then(response => {
          commit("SET_DEPARTURES", response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  fetchArrivals({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/dashboard/arrivals")
        .then(response => {
          commit("SET_ARRIVALS", response.data.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
