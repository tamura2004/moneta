export default class Form {
  constructor(fields) {
    this.fields = ["id", ...fields];
  }

  get state() {
    return () =>
      this.fields.reduce((a, field) => Object.assign(a, { [field]: null }), {});
  }

  get mutations() {
    return this.fields.reduce(
      (obj, field) =>
        Object.assign(obj, {
          [field]: (state, value) => (state[field] = value),
        }),
      {},
    );
  }

  get getters() {
    return this.fields.reduce(
      (obj, field) => Object.assign(obj, { [field]: state => state[field] }),
      {},
    );
  }

  get actions() {
    return this.fields.reduce(
      (obj, field) =>
        Object.assign(obj, {
          [field]: ({ commit }, value) => commit(field, value),
        }),
      {},
    );
  }
}
