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
      const lastStatement: Statement | undefined = state.statements.slice(-1).pop();
      if (lastStatement === undefined) {
        return '---';
      } else {
        return lastStatement.monetaryTotal();
      }
    }
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
    },
    logoff(state: State) {
      state.authenticated = false;
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
  },
  actions: {
    init(context) {
      context.dispatch('getBanks');
      context.dispatch('getBranches');
      context.dispatch('getCustomers');
      context.dispatch('getAccounts');
      context.dispatch('getStatements');
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
    getStatements(context) {
      axios.get('http://localhost:3000/statements').then((res) => {
        context.commit('setStatements', res.data);
      });
    },
  },
});
