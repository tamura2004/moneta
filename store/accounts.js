import { Gateway } from "~/plugins/gateway.js";
const gateway = new Gateway("accounts");

export const { state, getters, mutations, actions } = gateway;
