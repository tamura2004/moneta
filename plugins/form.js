export default class Form {
  constructor(collection, fields) {
    this.collection = collection;
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
      {
        data: state =>
          this.fields
            .filter(field => field !== "id")
            .reduce(
              (obj, field) =>
                Object.assign(obj, {
                  [field]: state[field],
                }),
              {},
            ),
      },
    );
  }

  get actions() {
    return this.fields.reduce(
      (obj, field) =>
        Object.assign(obj, {
          [field]: ({ commit }, value) => commit(field, value),
        }),
      {
        new: ({ commit }) => {
          this.fields.forEach(field => commit(field, null));
        },
        edit: ({ commit, rootGetters, dispatch }, id) => {
          const member = rootGetters[`${this.collection}/member`](id);
          if (member !== undefined) {
            commit("id", id);
            this.fields.forEach(field => {
              field === "id" || commit(field, member[field]);
            });
          } else {
            dispatch("new");
          }
        },
        add: ({ getters, dispatch }) =>
          dispatch(`${this.collection}/add`, getters.data, { root: true }),
        modify: ({ getters, dispatch }) =>
          dispatch(`${this.collection}/modify`, {
            id: getters.id,
            data: getters.data,
          }),
      },
    );
  }
}
