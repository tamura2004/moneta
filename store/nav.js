import Values from "~/plugins/values";
const values = new Values(["loginId", "drawer", "query", "edit", "valid"]);

export const { state, getters, mutations, actions } = values;
