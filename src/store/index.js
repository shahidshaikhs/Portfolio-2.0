import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: localStorage.getItem("dark-theme") || true,
  },
  mutations: {
    changeTheme: (state) => {
      state.darkTheme = !state.darkTheme;
      localStorage.setItem("dark-theme", state.darkTheme)
    },
  },
  actions: {
    changeTheme: (context) => {
      context.commit("changeTheme");
    },
  },
  modules: {},
});
