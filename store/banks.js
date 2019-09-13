import { Gateway } from "~/plugins/gateway.js";
export const { state, getters, mutations, actions } = new Gateway("banks");
