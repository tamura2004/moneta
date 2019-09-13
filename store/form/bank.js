import Form from "~/plugins/form";
const form = new Form("banks", ["name", "num"]);

export const { state, getters, mutations, actions } = form;
