import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.filter('threeDigitedYen', (value: number | undefined) => {
  if (value === undefined) {
    return 'no money data';
  } else {
    return '￥' + value.toLocaleString() + ' -';
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth) && store.state.account === undefined) {
    next({ path: '/login' });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
