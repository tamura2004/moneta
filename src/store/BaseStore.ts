import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

import API from '@/services/API';

import State from '@/models/State';
import Account from '@/models/Account';
import Statement from '@/models/Statement';
import Item from '@/models/Item';
import TransferStore from '@/store/TransferStore';
import SignupStore from '@/store/SignupStore';

export default new Vuex.Store({
  modules: {
    transfer: TransferStore,
    signup: SignupStore,
  },
  state: new State(),
  getters: {
    bankItems(state: State): Item[] {
      const items = [];
      for (const [key, bank] of state.banks) {
        items.push({
          id: key,
          name: bank.name,
        });
      }
      return items;
    },
    branchItems(state: State, bankId: string): Item[] {
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
    account(state: State): Account | undefined {
      if (state.accountId !== undefined) {
        return state.accounts.get(state.accountId);
      }
    },
    statements(state: State, getters): Map<string, Statement> {
      const collection: Map<string, Statement> = new Map<string, Statement>();
      for (const [key, value] of state.statements) {
        if (value.accountId === state.accountId) {
          collection.set(key, value);
        }
      }
      return collection;
    },
  },
  mutations: {
    accountId(state: State, accountId: string) {
      state.accountId = accountId;
    },
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
