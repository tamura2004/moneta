import Values from "~/plugins/values";
const values = new Values([
  "bankId",
  "branchId",
  "user",
  "name",
  "password",
  "kind",
  "num",
  "total",
]);

export const { state, getters, mutations, actions, accessors } = values;
