import { Firestore } from "~/plugins/firebase.js";

const firestore = new Firestore("branches");
export const state = firestore.state;
export const mutations = firestore.mutations;
export const actions = firestore.actions;
export const getters = {
  branches: state => bankId =>
    state.values.filter(branch => bankId === "ALL" || branch.bankId === bankId),
  branch: state => id => state.values.find(branch => branch.id === id),
};
