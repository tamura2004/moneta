export default class Value {
  constructor(name) {
    this.name = name;
  }

  get state() {
    return () => ({
      [this.name]: "",
    });
  }

  get mutations() {
    return {
      [this.name]: (state, value) => (state[this.name] = value),
    };
  }

  get getters() {
    return {
      [this.name]: state => state[this.name],
    };
  }

  get actions() {
    return {
      set: ({ commit }, value) => {
        commit(this.name, value);
      },
    };
  }
}
