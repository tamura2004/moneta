import { Module } from 'vuex';
import FormState from '@/store/FormState';
import BaseState from '@/store/BaseState';
import Item from '@/models/Item';
import Branch from '@/models/Branch';

const formStore: Module<FormState, BaseState> = {
  namespaced: true,
  state: new FormState(),
  getters: {
    branches(state, getters, rootState, rootGetters): Item[] {
      return Item.convertFromMap(
        rootState.branches,
        (branch: Branch) => branch.bankId === state.bankId,
      );
    },
  },
};

export default formStore;
