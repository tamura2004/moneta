import Form from "~/plugins/form";
const form = new Form("bugs", [
  "name",
  "category",
  "reportUser",
  "reportDate",
  "reportDescription",
  "designUser",
  "designDate",
  "designDescription",
  "developUser",
  "developDate",
  "developDescription",
  "testUser",
  "testDate",
  "testDescription",
]);

export const state = form.state;
export const mutations = form.mutations;
export const actions = form.actions;
export const getters = form.getters;
