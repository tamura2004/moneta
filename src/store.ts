import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Customer from '@/models/Customer';
import Account from '@/models/Account';
import Statement from '@/models/Statement';
import axios from 'axios';

export default new Vuex.Store({
  state: new State(),
  getters: {
    balance: (state) => {
      if (state.balance === undefined) {
        return '---';
      } else {
        return '￥' + state.balance.toLocaleString() + ' -';
      }
    },
  },
  mutations: {
    authenticate(state: State, customer: Customer) {
      state.authenticated = true;
      state.customer = customer;
      const branch = state.branches.find((b) => b.id === customer.branchId);
      if (branch) {
        state.branch = branch;
        state.bank = state.banks.find((b) => b.id === branch.bankId);
      }
      state.account = state.accounts.find((a) => a.customerId === customer.id);
    },
    logoff(state: State) {
      state.authenticated = false;
      state.customer = undefined;
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
    setCustomers(state: State, data) {
      state.customers = data.map((init: any) => {
        return new Customer(init);
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
    setBalance(state: State, data) {
      state.balance = Number(data);
    },
    setBankTo(state: State, bank: Bank) {
      state.transfer.BankTo = bank;
    },
    setBranchTo(state: State, branch: Branch) {
      state.transfer.BranchTo = branch;
    },
    setCustomerTo(state: State, customer: Customer) {
      state.transfer.CustomerTo = customer;
    },
    setAccountTo(state: State, account: Account) {
      state.transfer.AccountTo = account;
    },
    setAccountFrom(state: State, account: Account) {
      state.transfer.AccountFrom = account;
    },
  },
  actions: {
    init({dispatch}) {
      dispatch('getBanks');
      dispatch('getBranches');
      dispatch('getCustomers');
      dispatch('getAccounts');
    },
    login({commit, state, dispatch}, customer) {
      commit('authenticate', customer);
      const account = state.accounts.find((a) => a.customerId === customer.id);
      if (account !== undefined) {
        commit('setAccountFrom', account);
        dispatch('getBalance', account.id);
      }
    },
    getBanks(context) {
      axios.get('http://localhost:3000/banks').then((res) => {
        context.commit('setBanks', res.data);
      });
    },
    getBranches(context) {
      axios.get('http://localhost:3000/branches').then((res) => {
        context.commit('setBranches', res.data);
      });
    },
    getCustomers(context) {
      axios.get('http://localhost:3000/customers').then((res) => {
        context.commit('setCustomers', res.data);
      });
    },
    getAccounts(context) {
      axios.get('http://localhost:3000/accounts').then((res) => {
        context.commit('setAccounts', res.data);
      });
    },
    getStatements(context, AccountId) {
      axios.get(`http://localhost:3000/accounts/${AccountId}/statements`).then((res) => {
        context.commit('setStatements', res.data);
      });
    },
    getBalance(context, AccountId) {
      axios.get(`http://localhost:3000/accounts/${AccountId}/balance`).then((res) => {
        context.commit('setBalance', res.data);
      });
    },
  },
});
