import Values from "~/plugins/values";
const values = new Values(["valid", "user", "password"]);

export const { state, getters, mutations, actions, accessors } = values;
