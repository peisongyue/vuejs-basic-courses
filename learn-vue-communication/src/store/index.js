import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "state: this is a name from vuex state",
    userAge: 18,
  },
  getters: {
    laterAge: (state) => {
      return state.userAge + 10;
    },
    laterName: () => {
      return "getters: this is a name from vuex getters";
    },
  },
  mutations: {
    addUserAge(state, poyload) {
      state.userAge += poyload.n;
    },
    changeName(state, poyload) {
      state.userName = poyload.newName;
    },
  },
  actions: {
    async asyncAddAge({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("addUserAge", { n: 10 });
          resolve();
        }, 1000);
      });
    },
    async asyncChangeName({ dispatch, commit }) {
      await dispatch("asyncAddAge").then(() => {
        commit("changeName", { newName: "this is a new Name from action" });
      });
    },
  },
  modules: {},
});
