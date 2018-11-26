import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 10200300,
    authenticated: false,
  },
  mutations: {
    authenticate(state) {
      state.authenticated = !state.authenticated;
    },
  },
  actions: {
  },
});
