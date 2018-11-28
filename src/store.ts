import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    balance: 10200300,
    authenticated: false,
    statements: [
      {
        key: 1,
        date: '2018/11/12',
        type: '出',
        amount: '3,450',
        memo: '東京ガス',
        total: '113,450',
      },
      {
        key: 2,
        date: '2018/11/13',
        type: '入',
        amount: '350,000',
        memo: '給与',
        total: '363,450',
      },
    ],
  },
  mutations: {
    authenticate(state) {
      state.authenticated = !state.authenticated;
    },
  },
  actions: {
  },
});
