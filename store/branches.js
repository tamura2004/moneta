import { Gateway } from "~/plugins/gateway.js";
const gateway = new Gateway("branches");

export const { state, getters, mutations, actions } = gateway;
