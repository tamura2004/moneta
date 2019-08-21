import Form from "~/plugins/form";
const form = new Form("bugs", [
  "name",
  "reporter",
  "reportDate",
  "bugDescription",
  "impactRate",
  "interimRecoverer",
  "interimRecoverDate",
  "inspector",
  "inspectDate",
  "directCause",
  "rootCause",
  "fullRecoverDescription",
  "fullRecoverer",
  "commitDate",
  "testDate",
  "deployDate",
  "checkDate",
  "completeDate",
]);

export const state = form.state;
export const mutations = form.mutations;
export const actions = form.actions;
export const getters = form.getters;
