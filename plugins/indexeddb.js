import zango from "zangodb";
import cuid from "cuid";

const handleErr = e => {
  console.log(e);
};

export class IndexedDB {
  constructor(name) {
    this.name = name;
    this.db = new zango.Db(name, { values: ["id"] });
    this.collection = this.db.collection("values");
  }
  get actions() {
    return {
      add: async ({ commit }, data) => {
        commit("add", data);
        await this.collection.insert(data, handleErr);
      },
      modify: async ({ commit }, { id, data }) => {
        commit("modify", { id, data });
        await this.collection.update({ id }, data, handleErr);
      },
      remove: async ({ commit }, id) => {
        if (confirm("本当に削除してよろしいですか")) {
          commit("remove", { id });
          await this.collection.remove({ id }, handleErr);
        }
      },
      listen: async ({ state, commit }) => {
        if (state.values.length > 0) {
          return;
        }
        await this.collection.find({}).forEach(doc => {
          commit("add", doc);
        });
      },
      findOne: async ({}, _id) => {
        const value = await this.collection.findOne({ _id });
        return value;
      },
      write: async ({ dispatch, commit, state }, { data }) => {
        const id = data.id || data._id || cuid();
        const _id = id;
        const timestamp = new Date();
        const saved = await dispatch("findOne", id);
        data = Object.assign({}, saved, data, { id, _id, timestamp });

        if (typeof saved === "undefined") {
          await this.collection.insert(data, handleErr);
        } else {
          await this.collection.update({ _id }, data, handleErr);
        }

        if (state.values.some(v => v.id === id)) {
          commit("modify", { id, data });
        } else {
          commit("add", data);
        }
      },
    };
  }
}
