import zango from "zangodb";
import cuid from "cuid";

const handleErr = p => e => {
  console.log(e, p);
};

export class IndexedDB {
  constructor(name) {
    this.name = name;
    this.db = new zango.Db(name, { values: ["id"] });
    this.collection = this.db.collection("values");
    this.read = false;
  }
  get actions() {
    return {
      add: async ({ commit }, data) => {
        commit("add", data);
        await this.collection.insert(data, handleErr(data));
      },
      modify: async ({ commit }, { id, data }) => {
        commit("modify", { id, data });
        await this.collection.update({ id }, data, handleErr({ id, data }));
      },
      remove: async ({ commit }, id) => {
        if (confirm("本当に削除してよろしいですか")) {
          commit("remove", { id });
          await this.collection.remove({ id }, handleErr(id));
        }
      },
      upsert: async ({ commit, dispatch }, data) => {
        commit("upsert", data);
        const { _id } = data;
        const saved = await dispatch("findOne", _id);
        if (saved) {
          await this.collection.update({ _id }, data, handleErr(_id));
        } else {
          await this.collection.insert(data, handleErr(data));
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
      read: async ({ dispatch }) => {
        if (this.read) {
          return
        }
        await this.collection.find({}).forEach(doc => {
          dispatch("write", doc);
        });
        this.read = true;
      },
      write: async ({ dispatch }, data) => {
        const id = data.id || data._id || cuid();
        const _id = id;
        const timestamp = new Date();
        await dispatch("upsert", { ...data, id, _id, timestamp });
      },
    };
  }
}
