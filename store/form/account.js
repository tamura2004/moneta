import Values from "~/plugins/values";
const values = new Values([
  "name",
  "user",
  "password",
  "kind",
  "num",
  "total",
  "bankId",
  "branchId",
]);

export const { state, getters, mutations, actions, accessors } = values;
