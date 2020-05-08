import Vue from 'vue';
import Vuex from 'vuex';
import Axios from "axios";

let mongo_api = "https://api-thiti.herokuapp.com/api/name/"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        names: []    
    },

    mutations: {

        fetchName(state, {res}) {
            state.names = res.data;
        },

        //add
        addName(state, {payload}) {
            state.names.push(payload);
        },

        //delete
        deleteName(state, {payload}) {
            state.names.splice(payload.index, 1);
        },
        
        //edit
        editName(state, {payload}) {
            state.names[payload.index].name = payload.name;
            state.names[payload.index].position = payload.position;
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
            alert("Deleted");
            await Axios.delete(mongo_api + payload._id)
              .then(() => commit("deleteName", { payload }))
              .catch(err => alert(err));
          },
          async editName({ commit }, payload) {
            await Axios.put(mongo_api + payload._id, payload)            
              .then(() => commit("editName", { payload }))
              .catch(err => alert(err+" error in API"));
          }
        },
    
    getters: {
        names: state => state.names
    }    
});