import Value from "~/plugins/value";

const value = new Value("query");

export const state = value.state;
export const mutations = value.mutations;
export const getters = value.getters;
export const actions = value.actions;
