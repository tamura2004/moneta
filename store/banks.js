import { Gateway } from "~/plugins/gateway.js";
const gateway = new Gateway("banks");

export const { state, getters, mutations, actions } = gateway;
