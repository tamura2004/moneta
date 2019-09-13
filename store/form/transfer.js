import Values from "~/plugins/values";
const values = new Values(["bankId", "branchId", "accountId", "amount"]);

export const { state, getters, mutations, actions } = values;
