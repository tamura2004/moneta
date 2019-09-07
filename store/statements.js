import { Gateway } from "~/plugins/gateway.js";

const gateway = new Gateway("statements");
export const state = gateway.state;
export const mutations = gateway.mutations;
export const actions = gateway.actions;
export const getters = {
  statements: state => accountId =>
    state.values.filter(statement => statement.accountId === accountId),
  statement: state => id => state.values.find(statement => statement.id === id),
};
