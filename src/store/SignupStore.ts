import API from '@/services/API';
import { Module } from 'vuex';

import BaseState from '@/store/BaseState';
import Branch from '@/models/Branch';
import Item from '@/models/Item';
import SignupState from '@/store/SignupState';

const signupStore: Module<SignupState, BaseState> = {
  namespaced: true,
  state: new SignupState(),
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
};

export default signupStore;
