import Form from "~/plugins/form";
const form = new Form("branches", ["bankId", "name", "num"]);

export const state = form.state;
export const mutations = form.mutations;
export const actions = form.actions;
export const getters = {
  ...form.getters,
  branch: state => ({
    name: state.name,
    num: state.num,
  }),
};
