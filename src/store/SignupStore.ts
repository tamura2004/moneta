import API from '@/services/API';

import BaseState from '@/store/BaseState';
import Branch from '@/models/Branch';
import Item from '@/models/Item';
import SignupState from '@/store/SignupState';

export default {
  namespaced: true,
  state: new SignupState(),
  getters: {
    branches(state: SignupState, getters: any, rootState: BaseState): Map<string, Branch> {
      const collection = new Map<string, Branch>();
      for (const [key, branch] of rootState.branches) {
        if (state.bankId === branch.bankId) {
          collection.set(key, branch);
        }
      }
      return collection;
    },
    branchItems(state: SignupState, getters: any): Item[] {
      const items = [];
      for (const [key, branch] of getters.branches) {
        items.push({ id: key, name: branch.name });
      }
      return items;
    },
  },
  mutations: {
    bankId(state: SignupState, bankId: string) {
      state.bankId = bankId;
    },
    branchId(state: SignupState, branchId: string) {
      state.branchId = branchId;
    },
    name(state: SignupState, name: string) {
      state.name = name;
    },
  },
  actions: {
    async create(context: any) {
      const {commit, state, rootState} = context;
      API.post('createAccount', {...state})
        .then((doc: any) => {
          return doc;
        });
        // .catch((err) => alert(err));
    },
  },
};
