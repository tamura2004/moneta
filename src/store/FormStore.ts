import { Module } from 'vuex';
import FormState from '@/store/FormState';
import BaseState from '@/store/BaseState';
import Item from '@/models/Item';
import Branch from '@/models/Branch';
import API from '@/services/API';

const formStore: Module<FormState, BaseState> = {
  namespaced: true,
  state: new FormState(),
  mutations: {
    bankId(state, bankId: string) {
      state.bankId = bankId;
    },
    branchId(state, branchId: string) {
      state.branchId = branchId;
    },
    accountId(state, accountId: string) {
      state.accountId = accountId;
    },
  },
  actions: {
    async signup({ state }) {
      API.post('createAccount', {
        branchId: state.branchId,
        name: state.name,
      });
    },
  },
};

export default formStore;
