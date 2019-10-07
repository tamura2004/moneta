import { Collection } from "~/plugins/collection";
import { IndexedDB } from "~/plugins/indexeddb";

export const { state, getters, mutations } = new Collection();
export const { actions } = new IndexedDB("accounts");
