import Vue from 'vue';
import Vuex, { Store } from 'vuex';

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
    account(state: State): Account | undefined {
      if (state.accountId !== undefined) {
        return state.accounts.find((account) => account.id === state.accountId);
      }
    },
    accounts(state: State): Account[] {
      return state.accounts;
    },
    statements(state: State, getters): Statement[] {
      return state.statements.filter((statement) => getters.account && getters.account.id === statement.accountId);
    },
    branchesTo(state: State): Branch[] {
      return state.branches.filter((b: Branch) =>
        state.transfer !== undefined &&
        state.transfer.bankTo !== undefined &&
        state.transfer.bankTo.id !== undefined &&
        b.bankId === state.transfer.bankTo.id,
      );
    },
    accountsTo(state: State): Account[] {
      return state.accounts.filter((a: Account) =>
        state.transfer !== undefined &&
        state.transfer.branchTo !== undefined &&
        state.transfer.branchTo.id !== undefined &&
        a.branchId === state.transfer.branchTo.id,
      );
    },
  },
  mutations: {
    setProgress(state: State) {
      state.progress = true;
    },
    clearProgress(state: State) {
      state.progress = false;
    },
    setAccountId(state: State, accountId: string) {
      state.accountId = accountId;
    },
    logoff(state: State) {
      state.accountId = undefined;
    },
    setBanks(state: State, banks: Bank[]) {
      state.banks = banks;
    },
    setBranches(state: State, branches: Branch[]) {
      state.branches = branches;
    },
    setAccounts(state: State, accounts: Account[]) {
      state.accounts = accounts;
    },
    setStatements(state: State, statements: Statement[]) {
      state.statements = statements;
    },
    newTransfer(state: State) {
      state.transfer = new Transfer();
    },
    setBankTo(state: State, bankId: string) {
      state.transfer.bankTo = state.banks.find((bank: Bank) => bank.id === bankId);
    },
    setBranchTo(state: State, branchId: string) {
      state.transfer.branchTo = state.branches.find((branch: Branch) => branch.id === branchId);
    },
    setAccountTo(state: State, accountId: string) {
      state.transfer.accountTo = state.accounts.find((account: Account) => account.id === accountId);
    },
    setTransferAmount(state: State, amount: number) {
      state.transfer.amount = amount;
    },
  },
  actions: {
    init({dispatch}) {
      dispatch('listenBanks');
      dispatch('listenBranches');
      dispatch('listenAccounts');
      dispatch('listenStatements');
    },
    login({commit}, accountId: string) {
      commit('setAccountId', accountId);
    },
    listenBanks({commit}) {
      DB.collection('banks').onSnapshot((query) => {
        const banks: Bank[] = [];
        query.forEach((doc: any) => {
          banks.push(new Bank({id: doc.id, ...doc.data()}));
        });
        commit('setBanks', banks);
      });
    },
    listenBranches({commit}) {
      DB.collection('branches').onSnapshot((query) => {
        const branches: Branch[] = [];
        query.forEach((doc: any) => {
          branches.push(new Branch({id: doc.id, ...doc.data()}));
        });
        commit('setBranches', branches);
      });
    },
    listenAccounts({commit}) {
      DB.collection('accounts').onSnapshot((query) => {
        const accounts: Account[] = [];
        query.forEach((doc: any) => {
          accounts.push(new Account({id: doc.id, ...doc.data()}));
        });
        commit('setAccounts', accounts);
      });
    },
    listenStatements({commit}) {
      DB.collection('statements').orderBy('createdAt').onSnapshot((query) => {
        const statements: Statement[] = [];
        query.forEach((doc: any) => {
          statements.push(new Statement({id: doc.id, ...doc.data()}));
        });
        commit('setStatements', statements);
        commit('clearProgress');
      });
    },
    createAccount({commit}, form: Partial<Account>) {
      API.post('createAccount', form)
        .then((doc: any) => {
          commit('setAccountId', doc.data);
        })
        .catch((err) => alert(err));
    },
    async execTransfer({state, getters}) {
      if (state.transfer.accountTo !== undefined) {
        API.post('transfer', {
          idFrom: getters.account.id,
          idTo: state.transfer.accountTo.id,
          amount: state.transfer.amount,
        });
      }
    },
  },
});
