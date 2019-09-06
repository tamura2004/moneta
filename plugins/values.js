export default class Values {
  constructor(fields) {
    this.fields = fields;
  }

  get state() {
    return () => {
      const init = this.fields.map(field => ({ [field]: null }));
      return Object.assign(...init);
    };
  }

  get mutations() {
    const init = this.fields.map(field => ({
      [field]: (state, value) => (state[field] = value),
    }));
    return Object.assign(...init);
  }

  get getters() {
    const init = this.fields.map(field => ({ [field]: state => state[field] }));

    const data = state =>
      Object.assign(...this.fields.map(field => ({ [field]: state[field] })));
    return Object.assign(...init, { data });
  }

  get actions() {
    const init = this.fields.map(field => ({
      [field]: ({ commit }, value) => commit(field, value),
    }));

    const clear = ({ commit }) =>
      this.fields.forEach(field => commit(field, null));

    const set = ({ commit }, payload) =>
      this.fields.forEach(field => commit(field, payload && payload[field]));

    return Object.assign(...init, { clear, set });
  }
}
