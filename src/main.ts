import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { listen } from '@/plugins/firebase';
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';
import Statement from '@/models/Statement';

Vue.config.productionTip = false;

Vue.filter('threeDigitedYen', (value: number | undefined) => {
  if (value === undefined) {
    return 'no money data';
  } else {
    return '￥' + value.toLocaleString() + ' -';
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth) && store.state.accountId === undefined) {
    next({ path: '/login' });
  } else {
    next();
  }
});

// store.dispatch('init');
listen<Bank>(store, Bank);
listen<Branch>(store, Branch);
listen<Account>(store, Account);
listen<Statement>(store, Statement);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
