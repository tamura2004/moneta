import { Firestore } from "~/plugins/firebase.js";

const firestore = new Firestore("bugs");
export const state = firestore.state;
export const actions = firestore.actions;
export const mutations = firestore.mutations;
export const getters = firestore.getters;
