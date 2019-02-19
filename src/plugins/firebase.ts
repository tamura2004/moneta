import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Store } from 'vuex';
import State from '@/models/State';

Vue.use(VueFire);

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDLIbhYxnQgFYEVELcec20pbN78umBG9dg',
  authDomain: 'moneta-f39eb.firebaseapp.com',
  databaseURL: 'https://moneta-f39eb.firebaseio.com',
  projectId: 'moneta-f39eb',
  storageBucket: 'moneta-f39eb.appspot.com',
  messagingSenderId: '450912157988',
});

const conv = new Map<string, string>([
    ['Bank', 'banks'],
    ['Branch', 'branches'],
    ['Account', 'accounts'],
    ['Statement', 'statements'],
  ],
);

export const DB = firebaseApp.firestore();

export function listen<T>(store: Store<State>, fn: new(init: any) => T) {
  const name =  conv.get(fn.name);
  if (name === undefined) { return; }

  DB.collection(name).onSnapshot((query) => {
    const collection: T[] = [];
    query.forEach((doc: any) => {
      collection.push(new fn({id: doc.id, ...doc.data()}));
    });
    store.commit({
      type: 'set',
      name,
      collection,
    });
  });
}
