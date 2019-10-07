import Values from "~/plugins/values";
const values = new Values([
  "accountId",
  "kind",
  "amount",
  "total",
  "memo",
]);

export const { state, getters, mutations, actions, accessors } = values;
