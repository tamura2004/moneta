import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Store } from 'vuex';
import BaseState from '@/store/BaseState';
import BaseCollection from '@/models/BaseCollection';

Vue.use(VueFire);

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDLIbhYxnQgFYEVELcec20pbN78umBG9dg',
  authDomain: 'moneta-f39eb.firebaseapp.com',
  databaseURL: 'https://moneta-f39eb.firebaseio.com',
  projectId: 'moneta-f39eb',
  storageBucket: 'moneta-f39eb.appspot.com',
  messagingSenderId: '450912157988',
});

export const DB = firebaseApp.firestore();

export function listen<T extends BaseCollection>(
  store: Store<BaseState>,
  fn: (new(init: Partial<T>) => T) & { collectionName: string },
) {
  const name = fn.collectionName;
  DB.collection(name).onSnapshot((query) => {
    const collection: Map<string, T> = new Map<string, T>();
    query.forEach((doc: any) => {
      collection.set(doc.id, new fn({...doc.data()}));
    });
    store.commit({
      type: 'set',
      name,
      collection,
    });
  });
}
