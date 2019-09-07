import { Gateway } from "~/plugins/gateway.js";

const gateway = new Gateway("accounts");
export const state = gateway.state;
export const mutations = gateway.mutations;
export const actions = gateway.actions;
export const getters = {
  ...gateway.getters,
  accounts: state => branchId =>
    state.values.filter(
      account => branchId === "ALL" || account.branchId === branchId,
    ),
  account: state => id => state.values.find(account => account.id === id),
};
