import API from '@/services/API';

import Transfer from '@/models/Transfer';
import State from '@/models/State';

export default {
  namespaced: true,
  state: new Transfer(),
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
    setBranch(state: Transfer, branchId: string) {
      state.branchId = branchId;
    },
    setAccount(state: Transfer, accountId: string) {
      state.accountId = accountId;
    },
    setAmount(state: Transfer, amount: number) {
      state.amount = amount;
    },
  },
  actions: {
    async execTransfer(context: any) {
      const {state, getters, rootState} = context;
      if (rootState.accountId !== undefined) {
        API.post('transfer', {
          idFrom: getters.account.id,
          idTo: state.accountId,
          amount: state.amount,
        });
      }
    },
  },
};
