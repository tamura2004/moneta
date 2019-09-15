import Values from "~/plugins/values";
const values = new Values(["bankId", "name", "num"]);

export const { state, getters, mutations, actions, accessors } = values;

