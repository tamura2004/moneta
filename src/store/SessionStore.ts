import SessionState from './SessionState';
import SignupState from './SignupState';
import BaseState from './BaseState';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Account from '@/models/Account';
import Statement from '@/models/Statement';
import { Module } from 'vuex';
import API from '@/services/API';
import { AxiosResponse } from 'axios';

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
    statements(state: SessionState, getters: any, rootState: BaseState, rootGetters: any): Statement[] {
      return [...rootState.statements]
        .filter(([key, statement]) => statement.accountId === state.accountId)
        .sort(([, a], [, b]) => a.createdAt.seconds - b.createdAt.seconds)
        .map(([, c]) => c);
    },
  },
  mutations: {
    accountId(state: SessionState, accoundId: string): void {
      state.accountId = accoundId;
    },
    processing(state: SessionState, active: boolean): void {
      state.processing = active;
    },
  },
  actions: {
    login({commit}, accoundId: string): void {
      commit('accountId', accoundId);
    },
    logoff({commit}): void {
      commit('accountId', undefined);
    },
    async signup({commit}, form: SignupState): Promise<string> {
      const response = await API.post('createAccount', {...form});
      return response.data;
    },
    toggle({commit, state}): void {
      commit('processing', !state.processing);
    },
  },
};

export default sessionStore;
