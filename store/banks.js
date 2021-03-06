import { Collection } from "~/plugins/collection";
import { IndexedDB } from "~/plugins/indexeddb";
import { DATA } from "~/assets/init/banks";

export const { state, getters, mutations } = new Collection(DATA);
export const { actions } = new IndexedDB("banks");
