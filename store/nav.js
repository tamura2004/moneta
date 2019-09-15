import Values from "~/plugins/values";
export const fields = ["drawer", "query", "edit", "valid"];
const values = new Values(fields);

export const { state, getters, mutations, actions } = values;