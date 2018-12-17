import Vue from 'vue';
import Router from 'vue-router';
import Menu from './views/Menu.vue';
import Balance from './views/Balance.vue';
import Statements from './views/Statements.vue';
import ExecTransfer from './views/ExecTransfer.vue';
import SelectBank from './views/SelectBank.vue';
import SelectBranch from './views/SelectBranch.vue';
import SelectCustomer from './views/SelectCustomer.vue';
import SelectAccount from './views/SelectAccount.vue';
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
      meta: {
        requireAuth: true,
      },
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
      path: '/statements',
      name: 'statements',
      component: Statements,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/selectBank',
      name: 'selectBank',
      component: SelectBank,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/selectBranch',
      name: 'selectBranch',
      component: SelectBranch,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/selectCustomer',
      name: 'selectCustomer',
      component: SelectCustomer,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/selectAccount',
      name: 'selectAccount',
      component: SelectAccount,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: ExecTransfer,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

export default router;
