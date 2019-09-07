import { Gateway } from "~/plugins/gateway.js";

const gateway = new Gateway("branches");
export const state = gateway.state;
export const mutations = gateway.mutations;
export const actions = gateway.actions;
export const getters = {
  ...gateway.getters,
  branches: state => bankId =>
    state.values.filter(branch => bankId === "ALL" || branch.bankId === bankId),
  branch: state => id => state.values.find(branch => branch.id === id),
};
