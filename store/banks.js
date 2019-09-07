import { Gateway } from "~/plugins/gateway.js";

const gateway = new Gateway("banks");
export const state = gateway.state;
export const actions = gateway.actions;
export const mutations = gateway.mutations;
export const getters = {
  ...gateway.getters,
  banks: state => state.values,
  bank: state => id => state.values.find(bank => bank.id === id),
};
