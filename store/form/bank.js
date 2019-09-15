import Values from "~/plugins/values";
const values = new Values(["name", "num"]);

export const { state, getters, mutations, actions, accessors } = values;
