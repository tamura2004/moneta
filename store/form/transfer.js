import Values from "~/plugins/values";
const values = new Values(["valid", "bankId", "branchId", "accountId", "amount", "account", "total"]);

export const { state, getters, mutations, actions, accessors } = values;
