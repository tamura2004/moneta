import Values from "~/plugins/values";
const values = new Values(["valid", "bankId", "branchId", "accountId", "amount"]);

export const { state, getters, mutations, actions } = values;
