import { Gateway } from "~/plugins/gateway.js";
const gateway = new Gateway("statements");

export const { state, getters, mutations, actions } = gateway;
