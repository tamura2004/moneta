import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

import BaseState from '@/store/BaseState';
import SessionStore from './SessionStore';
import SignupStore from './SignupStore';
import TransferStore from './TransferStore';

export default new Vuex.Store({
  modules: {
    session: SessionStore,
    signup: SignupStore,
    transfer: TransferStore,
  },
  state: new BaseState(),
  mutations: {
    set(state, {name, collection}) {
      Vue.set(state, name, collection);
    },
  },
});
