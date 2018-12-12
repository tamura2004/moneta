import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import { Bank, IBank } from '@/models/Bank';
import Branch from '@/models/Branch';
import Customer from '@/models/Customer';
import Account from '@/models/Account';
import Statement from '@/models/Statement';
import axios from 'axios';

export default new Vuex.Store({
  state: new State(),
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
    authenticate(state: State, customer: Customer) {
      state.authenticated = true;
      state.customer = customer;
    },
    logoff(state: State) {
      state.authenticated = false;
    },
    setBanks(state: State, data) {
      state.banks = data.map((d: IBank) => {
        return new Bank(d);
      });
    },
  },
  actions: {
    initBanks(context) {
      axios.get('http://localhost:3000/banks').then((res) => {
        context.commit('setBanks', res.data);
      });
    },
  },
});
