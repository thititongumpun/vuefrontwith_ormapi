import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let mongo_api = "https://api-thiti.herokuapp.com/api/name/";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    employees: []
  },

  mutations: {
    fetchName(state, { res }) {
      state.employees = res.data;
    },
    addName(state, { payload }) {
      state.employees.push(payload);
    },
    deleteName(state, { payload }) {
      state.employees.splice(payload.index, 1);
    },
    editName(state, { payload }) {
      state.employees[payload.index].name = payload.name;
      state.employees[payload.index].position = payload.position;
    }
  },

  actions: {
    async fetchName({ commit }) {
      await Axios.get(mongo_api)
        .then(res => commit("fetchName", { res }))
        .catch(err => alert(err));
    },
    async addName({ commit }, payload) {
      await Axios.post(mongo_api, payload)
        .then(() => commit("addName", { payload }))
        .catch(err => alert(err));
    },
    async deleteName({ commit }, payload) {
      alert("ลบ");
      await Axios.delete(mongo_api + payload._id)
        .then(() => commit("deleteName", { payload }))
        .catch(err => alert(err));
    },
    async editName({ commit }, payload) {
      await Axios.put(mongo_api + payload._id, payload)
        .then(() => commit("editName", { payload }))
        .catch(err => alert(err));
    }
  },

  getters: {
    employees: state => state.employees
  }
});