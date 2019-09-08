const debug = false;

import { Firestore } from "~/plugins/firebase";
import { IndexedDB } from "~/plugins/indexeddb";

export const Gateway = debug ? IndexedDB : Firestore;
