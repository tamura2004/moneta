import Values from "~/plugins/values";
const values = new Values(["drawer", "query", "edit", "valid"]);

export const { state, getters, mutations, actions, accessors } = values;