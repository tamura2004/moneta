import Vue from "vue";

export class Collection {
  constructor(init) {
    this.init = Array.isArray(init) ? init : [];
  }
  get state() {
    return () => ({
      values: this.init,
    });
  }
  get getters() {
    return {
      collection: state => state.values,
    };
  }
  get mutations() {
    return {
      add(state, data) {
        state.values.push(data);
      },
      modify(state, { id, data }) {
        const index = state.values.findIndex(value => value.id === id);
        Vue.set(state.values, index, { id, ...data });
      },
      remove(state, id) {
        const index = state.values.findIndex(value => value.id === id);
        state.values.splice(index, 1);
      },
      upsert(state, data) {
        const { id } = data;
        const index = state.values.findIndex(v => v.id === id);
        if (index !== -1) {
          Vue.set(state.values, index, data);
        } else {
          state.values.push(data);
        }
      },
    };
  }
}
