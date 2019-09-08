import Vue from "vue";
import pluralize from "pluralize";
import zango from "zangodb";
import cuid from "cuid";

const handleErr = e => e && alert(e);

export class IndexedDB {
  constructor(name) {
    this.db = new zango.Db(name, { values: true });
    this.collection = this.db.collection("values");

    this.name = name;
    this.collectionName = this.name;
    this.memberName = pluralize.singular(this.name);
  }
  get state() {
    return () => ({
      values: [],
      unsubscribe: null,
    });
  }
  get getters() {
    return {
      collection: state => state.values,
      [this.collectionName]: state => state.values,
      member: state => id => state.values.find(value => value.id === id),
      [this.memberName]: state => id =>
        state.values.find(value => value.id === id),
    };
  }
  get mutations() {
    return {
      add(state, { id, data }) {
        if (state.values.some(v => v.id === id)) {
          return;
        }
        state.values.push({ id, ...data });
      },
      modify(state, { id, data }) {
        const index = state.values.findIndex(value => value.id === id);
        Vue.set(state.values, index, { id, ...data });
      },
      remove(state, { id }) {
        const index = state.values.findIndex(value => value.id === id);
        state.values.splice(index, 1);
      },
      setUnsubscribe(state, unsubscribe) {
        state.unsubscribe = unsubscribe;
      },
    };
  }
  get actions() {
    return {
      add: async ({ commit }, data) => {
        const id = cuid();
        const timestamp = new Date();
        Object.assign(data, { _id: id, timestamp });
        commit("add", { id, data });
        await this.collection.insert({ id, ...data }, handleErr);
        return { id };
      },
      modify: async ({ state, commit }, { id, data }) => {
        const value = state.values.find(v => v.id === id);
        const _id = id;
        data = Object.assign({}, value, data);
        commit("modify", { id, data });
        await this.collection.update({ _id }, { id, _id, ...data }, handleErr);
      },
      remove: async ({ commit }, id) => {
        if (confirm("本当に削除してよろしいですか")) {
          commit("remove", { id });
          await this.collection.remove({ _id: id }, handleErr);
        }
      },
      listen: ({ state, commit }) => {
        if (state.values.length > 0) {
          return;
        }
        this.collection.find({}).forEach(doc => {
          commit("add", {
            id: doc.id,
            data: doc,
          });
        });
      },
    };
  }
}
