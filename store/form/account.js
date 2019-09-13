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

export const { state, getters, mutations, actions } = form;
