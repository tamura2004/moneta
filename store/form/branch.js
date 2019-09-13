import Form from "~/plugins/form";
const form = new Form("branches", ["bankId", "name", "num"]);

export const { state, getters, mutations, actions } = form;

