import API from '@/services/API';

import TransferState from '@/store/TransferState';
import BaseState from '@/store/BaseState';
import Branch from '@/models/Branch';
import Account from '@/models/Account';
import Item from '@/models/Item';
import { Module } from 'vuex';

const transferStore: Module<TransferState, BaseState> = {
  namespaced: true,
  state: new TransferState(),
  getters: {
    branches(state: TransferState, getters: any, rootState: BaseState): Map<string, Branch> {
      const collection = new Map<string, Branch>();
      for (const [key, branch] of rootState.branches) {
        if (state.bankId === branch.bankId) {
          collection.set(key, branch);
        }
      }
      return collection;
    },
    branchItems(state: TransferState, getters: any): Item[] {
      const items = [];
      for (const [id, branch] of getters.branches) {
        items.push({ id, name: branch.name });
      }
      return items;
    },
    accounts(state: TransferState, getters: any, rootState: BaseState): Map<string, Account> {
      const collection = new Map<string, Account>();
      for (const [key, account] of rootState.accounts) {
        if (state.branchId === account.branchId) {
          collection.set(key, account);
        }
      }
      return collection;
    },
    accountItems(state: TransferState, getters: any): Item[] {
      const items = [];
      for (const [id, account] of getters.accounts) {
        const name = account.name + ' ' + account.kind + ' ' + account.num;
        items.push({ id, name });
      }
      return items;
    },
  },
  mutations: {
    processing(state: TransferState, payload: boolean) {
      state.processing = payload;
    },
    clear(state: TransferState) {
      state.clear();
    },
    bankId(state: TransferState, bankId: string) {
      state.bankId = bankId;
    },
    branchId(state: TransferState, branchId: string) {
      state.branchId = branchId;
    },
    accountId(state: TransferState, accountId: string) {
      state.accountId = accountId;
    },
    amount(state: TransferState, amount: number) {
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
