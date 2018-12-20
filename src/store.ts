import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';
import Statement from '@/models/Statement';
import { Transfer } from '@/models/Transfer';
import API from '@/services/API';

export default new Vuex.Store({
  state: new State(),
  getters: {
    progress(state: State): 'BANK' | 'BRANCH' | 'ACCOUNT' | 'AMOUNT' {
      return state.transfer.progress;
    },
    branchesTo(state: State): Branch[] {
      return state.branches.filter((b: Branch) => {
        if (state.transfer !== undefined) {
          if (state.transfer.bankTo !== undefined) {
            return b.bank_id === state.transfer.bankTo.id;
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
          if (state.transfer.branchTo !== undefined) {
            return a.branch_id === state.transfer.branchTo.id;
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
    login(state: State, account: Account) {
      state.account = account;
    },
    setBalance(state: State, account: Account) {
      if (state.account !== undefined) {
        state.account.balance = account.balance;
      } else {
        state.account = account;
      }
    },
    logoff(state: State) {
      state.account = undefined;
    },
    setBanks(state: State, data) {
      state.banks = data.map((init: any) => {
        return new Bank(init);
      });
    },
    setBranches(state: State, data) {
      state.branches = data.map((init: any) => {
        return new Branch(init);
      });
    },
    setAccounts(state: State, data) {
      state.accounts = data.map((init: any) => {
        return new Account(init);
      });
    },
    setStatements(state: State, data) {
      state.statements = data.map((init: any) => {
        return new Statement(init);
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
    login({commit, dispatch}, account) {
      API.get(`accounts/${account.id}`).then((res) => {
        commit('login', new Account(res.data));
      });
    },
    getBanks({commit}) {
      API.get('banks').then((res) => {
        commit('setBanks', res.data);
      });
    },
    getBranches({commit}) {
      API.get('branches').then((res) => {
        commit('setBranches', res.data);
      });
    },
    getAccounts({commit}) {
      API.get('accounts').then((res) => {
        commit('setAccounts', res.data);
      });
    },
    getStatements({commit}, accountId) {
      API.get(`accounts/${accountId}/statements`).then((res) => {
        commit('setStatements', res.data);
      });
    },
    updateBalance({commit}, account) {
      API.get(`accounts/${account.id}`).then((res) => {
        commit('setBalance', res.data);
      });
    },
  },
});
