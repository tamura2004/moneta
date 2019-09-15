import { fields } from "~/store/nav";

export default ({ store }, inject) => {
  let nav = {}
  for (const field of fields) {
    Object.defineProperty(nav, field, {
      get() {
          return store.getters[`nav/${field}`];
      },
      set(value) {
        store.dispatch(`nav/${field}`, value);
      },
    });
  }
  inject("nav", nav);
};
