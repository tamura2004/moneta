import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

import API from '@/services/API';

import BaseState from '@/store/BaseState';
import Item from '@/models/Item';
import TransferStore from '@/store/TransferStore';
import SignupStore from '@/store/SignupStore';
import SessionStore from './SessionStore';

export default new Vuex.Store({
  modules: {
    transfer: TransferStore,
    signup: SignupStore,
    session: SessionStore,
  },
  state: new BaseState(),
  getters: {
    bankItems(state: BaseState): Item[] {
      const items = [];
      for (const [key, bank] of state.banks) {
        items.push({
          id: key,
          name: bank.name,
        });
      }
      return items;
    },
    branchItems(state: BaseState, bankId: string): Item[] {
      const items = [];
      for (const [key, branch] of state.branches) {
        if (branch.bankId === bankId) {
          items.push({
            id: key,
            name: branch.name,
          });
        }
      }
      return items;
    },
  },
  mutations: {
    set(state, {name, collection}) {
      Vue.set(state, name, collection);
    },
  },
  actions: {
    login({commit}, accountId: string) {
      commit('accountId', accountId);
    },
    logoff({commit}) {
      commit('accountId', undefined);
    },
  },
});
