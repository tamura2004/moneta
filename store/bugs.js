import { Firestore } from "~/plugins/firebase.js";
const firestore = new Firestore("bugs");
const PROGRESS = ["report", "design", "develop", "test"];

export const state = firestore.state;
export const actions = firestore.actions;
export const mutations = firestore.mutations;
export const getters = {
  ...firestore.getters,
  bugs: state => (query, progress, account) => {
    const index = PROGRESS.indexOf(progress);
    const nextProgress = PROGRESS[index + 1];
    return state.values.filter(
      bug =>
        PROGRESS.some(p => bug[`${p}User`] && account(bug[`${p}User`]).name.includes(query)) &&
        (progress === null ||
          (bug[`${progress}Date`] !== null && !bug[`${nextProgress}Date`])),
    );
  },
};
