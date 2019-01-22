import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';

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
