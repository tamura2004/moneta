import Values from "~/plugins/values";
const values = new Values(["valid", "bankId", "branchId", "user", "name", "password"]);

export const { state, getters, mutations, actions } = values;
