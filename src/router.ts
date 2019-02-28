import Vue from 'vue';
import Router from 'vue-router';

import Menu from '@/views/Menu.vue';
import Balance from '@/views/Balance.vue';
import Statements from '@/views/Statements.vue';
import Transfer from '@/views/Transfer.vue';
import Login from '@/views/Login.vue';
import Signin from '@/views/Signin.vue';

import TransferBankSelect from '@/views/TransferBankSelect.vue';
import TransferBranchSelect from '@/views/TransferBranchSelect.vue';
import TransferAccountSelect from '@/views/TransferAccountSelect.vue';
import TransferAmountInput from '@/views/TransferAmountInput.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Menu },
    { path: '/balance', component: Balance },
    { path: '/statements', component: Statements },
    {
      path: '/transfer',
      component: Transfer,
      children: [
        { path: 'bank', component: TransferBankSelect },
        { path: 'branch', component: TransferBranchSelect },
        { path: 'account', component: TransferAccountSelect },
        { path: 'amount', component: TransferAmountInput },
      ],
    },
    { path: '/login',
      component: Login,
      meta: {
        guestAccess: true,
      },
    },
    {
      path: '/signin',
      component: Signin,
      meta: {
        guestAccess: true,
      },
    },
  ],
});

export default router;
