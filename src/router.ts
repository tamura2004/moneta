import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Balance from './views/Balance.vue';
import Statement from './views/Statement.vue';
import Transfer from './views/Transfer.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/balance',
      name: 'balance',
      component: Balance,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/statement',
      name: 'statement',
      component: Statement,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

export default router;
