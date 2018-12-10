import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Statement from '@/models/Statement';

export default new Vuex.Store({
  state: {
    loading: false,
    balance: 10200300,
    authenticated: false,
    statements: [
      new Statement(1, '2018/11/12', '出', 3450, '東京ガス', 113450),
      new Statement(2, '2018/11/13', '入', 350000, '給与', 363450),
    ],
  },
  getters: {
    balance: (state) => {
      const lastStatement: Statement | undefined = state.statements.slice(-1).pop();
      if (lastStatement === undefined) {
        return '---';
      } else {
        return lastStatement.monetaryTotal();
      }
    },
  },
  mutations: {
    authenticate(state) {
      state.authenticated = !state.authenticated;
    },
  },
  actions: {
  },
});
