import Form from "~/plugins/form";
const form = new Form("accounts", [
  "name",
  "user",
  "password",
  "kind",
  "num",
  "total",
  "bankId",
  "branchId",
]);

export const state = form.state;
export const mutations = form.mutations;
export const actions = form.actions;
export const getters = form.getters;
