import API from '@/services/API';

import Transfer from '@/models/Transfer';
import State from '@/models/State';
import Branch from '@/models/Branch';
import Account from '@/models/Account';
import Item from '@/models/Item';

export default {
  namespaced: true,
  state: new Transfer(),
  getters: {
    branches(state: Transfer, getters: any, rootState: State): Map<string, Branch> {
      const collection = new Map<string, Branch>();
      for (const [key, branch] of rootState.branches) {
        if (state.bankId === branch.bankId) {
          collection.set(key, branch);
        }
      }
      return collection;
    },
    branchItems(state: Transfer, getters: any): Item[] {
      const items = [];
      for (const [id, branch] of getters.branches) {
        items.push({ id, name: branch.name });
      }
      return items;
    },
    accounts(state: Transfer, getters: any, rootState: State): Map<string, Account> {
      const collection = new Map<string, Account>();
      for (const [key, account] of rootState.accounts) {
        if (state.branchId === account.branchId) {
          collection.set(key, account);
        }
      }
      return collection;
    },
    accountItems(state: Transfer, getters: any): Item[] {
      const items = [];
      for (const [id, account] of getters.accounts) {
        const name = account.name + ' ' + account.kind + ' ' + account.num;
        items.push({ id, name });
      }
      return items;
    },
  },
  mutations: {
    processing(state: Transfer, payload: boolean) {
      state.processing = payload;
    },
    clear(state: Transfer) {
      state.clear();
    },
    bankId(state: Transfer, bankId: string) {
      state.bankId = bankId;
    },
    branchId(state: Transfer, branchId: string) {
      state.branchId = branchId;
    },
    accountId(state: Transfer, accountId: string) {
      state.accountId = accountId;
    },
    amount(state: Transfer, amount: number) {
      state.amount = amount;
    },
  },
  actions: {
    async exec(context: any) {
      const {state, getters, rootState} = context;
      if (rootState.accountId !== undefined) {
        API.post('transfer', {
          idFrom: rootState.accountId,
          idTo: state.accountId,
          amount: state.amount,
        });
      }
    },
  },
};
