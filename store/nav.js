import Values from "~/plugins/values";
const values = new Values(["drawer", "query", "edit"]);

export const state = values.state
export const mutations = values.mutations
export const getters = values.getters
export const actions = values.actions
