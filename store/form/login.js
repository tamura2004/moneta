import Values from "~/plugins/values";
const values = new Values(["valid", "id", "user", "password"]);

export const { state, getters, mutations, actions } = values;
