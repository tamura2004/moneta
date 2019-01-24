import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';
import Statement from '@/models/Statement';
import { Transfer, TransferProgress } from '@/models/Transfer';
import API from '@/services/API';
import { DB } from './plugins/firebase';

export default new Vuex.Store({
  state: new State(),
  getters: {
    progress(state: State): TransferProgress {
      return state.transfer.progress;
    },
    branchesTo(state: State): Branch[] {
      return state.branches.filter((b: Branch) => {
        if (state.transfer !== undefined) {
          if (state.transfer.bankTo !== undefined) {
            return b.bankId === state.transfer.bankTo.id;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
    },
    accountsTo(state: State): Account[] {
      return state.accounts.filter((a: Account) => {
        if (state.transfer !== undefined) {
          if (state.transfer.branchTo !== undefined && state.account !== undefined) {
            return a.branchId === state.transfer.branchTo.id;
            // return a.branchId === state.transfer.branchTo.id && a.id !== state.account.id;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
    },
  },
  mutations: {
    setAccount(state: State, account: Account) {
      state.account = account;
    },
    logoff(state: State) {
      state.account = undefined;
    },
    setBanks(state: State, query) {
      state.banks = [];
      query.forEach((bankRef: any) => {
        state.banks.push(new Bank({
          id: bankRef.id,
          ...bankRef.data(),
        }));
      });
    },
    setBranches(state: State, query) {
      state.branches = [];
      query.forEach((branchRef: any) => {
        state.branches.push(new Branch({
          id: branchRef.id,
          ...branchRef.data(),
        }));
      });
    },
    setAccounts(state: State, query) {
      state.accounts = [];
      query.forEach((accountRef: any) => {
        state.accounts.push(new Account({
          id: accountRef.id,
          ...accountRef.data(),
        }));
      });
    },
    setStatements(state: State, query) {
      state.statements = [];
      query.forEach((statementRef: any) => {
        state.statements.push(new Statement({
          id: statementRef.id,
          ...statementRef.data(),
        }));
      });
    },
    newTransfer(state: State) {
      state.transfer = new Transfer();
    },
    setBankTo(state: State, bank: Bank) {
      state.transfer.bankTo = bank;
    },
    setBranchTo(state: State, branch: Branch) {
      state.transfer.branchTo = branch;
    },
    setAccountTo(state: State, account: Account) {
      state.transfer.accountTo = account;
    },
  },
  actions: {
    init({dispatch}) {
      dispatch('getBanks');
      dispatch('getBranches');
      dispatch('getAccounts');
    },
    login({commit}, account: Account) {
      commit('setAccount', account);
    },
    getBanks({commit}) {
      DB.collection('banks').get()
        .then((query) => {
          commit('setBanks', query);
        })
        .catch((e) => alert(e));
    },
    getBranches({commit}) {
      DB.collection('branches').get()
        .then((query) => {
          commit('setBranches', query);
        })
        .catch((e) => alert(e));
    },
    getAccounts({commit}) {
      DB.collection('accounts').get()
        .then((query) => {
          commit('setAccounts', query);
        })
        .catch((e) => alert(e));
    },
    getStatements({commit, state}) {
      DB.collection('statements').get()
        .then((query) => {
          commit('setStatements', query);
        })
        .catch((e) => alert(e));
    },
    async createAccount({ commit, dispatch }, form: Partial<Account>) {
      await API.post('createAccount', form);
      dispatch('getAccounts');
    },
  },
});
