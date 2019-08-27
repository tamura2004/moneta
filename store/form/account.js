import Form from "~/plugins/form";
const form = new Form("accounts", ["bankId", "brancheId", "name", "num"]);

export const state = form.state;
export const mutations = form.mutations;
export const actions = form.actions;
export const getters = {
  ...form.getters,
  account: state => ({
    name: state.name,
    num: state.num,
  }),
};
