export default class Form {
  constructor(collection, names) {
    this.collection = collection;
    this.names = names;
    this.fields = ["id", ...names];
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
      Object.assign(...this.names.map(field => ({ [field]: state[field] })));
    return Object.assign(...base, { data });
  }

  get actions() {
    const base = this.fields.map(field => ({
      [field]: ({ commit }, value) => commit(field, value),
    }));

    const clear = ({ commit }) =>
      this.fields.forEach(field => commit(field, null));

    const edit = ({ commit, dispatch }, member) => {
      if (member !== undefined) {
        commit("id", member.id);
        this.names.forEach(field => {
          commit(field, member[field]);
        });
      } else {
        dispatch("clear");
      }
    };

    return Object.assign(...base, { clear, edit });
  }
}
