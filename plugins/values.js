export default class Values {
  constructor(fields) {
    this.fields = ["id", "_id", "text", "value", ...fields];
  }

  get state() {
    return () => {
      const base = this.fields.map(field => ({ [field]: null }));
      return Object.assign(...base);
    };
  }

  get mutations() {
    const base = this.fields.map(field => ({
      [field]: (state, value) => (state[field] = value),
    }));
    return Object.assign(...base);
  }

  get getters() {
    const base = this.fields.map(field => ({ [field]: state => state[field] }));

    const data = state =>
      Object.assign(...this.fields.map(field => ({ [field]: state[field] })));
    return Object.assign(...base, { data });
  }

  get actions() {
    const base = this.fields.map(field => ({
      [field]: ({ commit }, value) => commit(field, value),
    }));

    const clear = ({ commit }) =>
      this.fields.forEach(field => commit(field, null));

    const set = ({ commit }, payload) =>
      this.fields.forEach(field => commit(field, payload && payload[field]));

    const data = ({ commit, dispatch }, member) => {
      if (member) {
        this.fields.forEach(field => {
          commit(field, member[field]);
        });
      } else {
        dispatch("clear");
      }
    };

    return Object.assign(...base, { clear, set, data });
  }

  get accessors() {
    return (name, store) => {
      let base = {};
      for (const field of ["data", ...this.fields]) {
        Object.defineProperty(base, field, {
          get() {
            return store.getters[`${name}/${field}`];
          },
          set(value) {
            store.dispatch(`${name}/${field}`, value);
          },
        });
      }
      return base;
    };
  }
}
