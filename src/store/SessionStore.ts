import SessionState from './SessionState';
import BaseState from './BaseState';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Account from '@/models/Account';
import Statement from '@/models/Statement';
import { Module } from 'vuex';

const sessionStore: Module<SessionState, BaseState> = {
  namespaced: true,
  state: new SessionState(),
  getters: {
    account(state: SessionState, getters: any, rootState: BaseState, rootGetters: any): Account | undefined {
      if (state.accountId !== undefined) {
        return rootState.accounts.get(state.accountId);
      }
    },
    branch(state: SessionState, getters: any, rootState: BaseState, rootGetters: any): Branch | undefined {
      if (getters.account !== undefined) {
        return rootState.branches.get(getters.account.branchId);
      }
    },
    bank(state: SessionState, getters: any, rootState: BaseState, rootGetters: any): Bank | undefined {
      if (getters.branch !== undefined) {
        return rootState.banks.get(getters.branch.bankId);
      }
    },
    statements(state: SessionState, getters: any, rootState: BaseState, rootGetters: any): Map<string, Statement> {
      const collection: Map<string, Statement> = new Map<string, Statement>();
      for (const [key, statement] of rootState.statements) {
        if (statement.accountId === state.accountId) {
          collection.set(key, statement);
        }
      }
      return collection;
    },
  },
  mutations: {
    accoundId(state: SessionState, accoundId: string): void {
      state.accountId = accoundId;
    },
  },
  actions: {
    login({commit}, accoundId: string): void {
      commit('accountId', accoundId);
    },
    logout({commit}): void {
      commit('accountId', undefined);
    },
  },
};

export default sessionStore;
