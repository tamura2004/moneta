import { Firestore } from '~/plugins/firebase.js';

const firestore = new Firestore('statements');
export const state = firestore.state;
export const mutations = firestore.mutations;
export const actions = firestore.actions;
export const getters = {
  statements: state => accountId =>
    state.values.filter(statement => statement.accountId === accountId),
  statement: state => id =>
    state.values.find(statement => statement.id === id),
};
