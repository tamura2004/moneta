import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import State from '@/models/State';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Customer from '@/models/Customer';
import Account from '@/models/Account';
import Statement from '@/models/Statement';

export default new Vuex.Store({
  state: new State(
    false,
    null,
    [
      new Bank(1, '0011', 'モネタ銀行'),
      new Bank(2, '0112', '大鳥信用金庫'),
    ],
    [
      new Branch(1, 1, '100', '本店'),
      new Branch(2, 1, '200', '札幌支店'),
      new Branch(3, 2, '100', '本店'),
      new Branch(4, 2, '200', '大鳥支店'),
    ],
    [
      new Customer(1, 1, '100101', '萌音田　太郎', 'taro.moneta@moneta.jp', '39f13d60b3f6fbe0ba1636b0a9283c50'),
      new Customer(2, 1, '100102', '萌音田　次郎', 'jiro.moneta@moneta.jp', '39f13d60b3f6fbe0ba1636b0a9283c50'),
      new Customer(3, 2, '100203', '萌音田　花子', 'hanako.moneta@moneta.jp', '39f13d60b3f6fbe0ba1636b0a9283c50'),
      new Customer(4, 3, '200102', '大鳥　太郎', 'taro.otori@otori.jp', '39f13d60b3f6fbe0ba1636b0a9283c50'),
      new Customer(5, 4, '200203', '大鳥　次郎', 'jiro.otori@otori.jp', '39f13d60b3f6fbe0ba1636b0a9283c50'),
    ],
    [
      new Account(1, 1, '101223', '当座'),
      new Account(2, 1, '233445', '普通'),
      new Account(3, 2, '233445', '普通'),
      new Account(4, 3, '233445', '普通'),
      new Account(5, 4, '233445', '普通'),
      new Account(6, 5, '233445', '普通'),
    ],
    [
      new Statement(1, 1, '2018/11/12', '出', 3450, '東京ガス', 113450),
      new Statement(2, 1, '2018/11/13', '入', 350000, '給与', 363450),
    ],
  ),
  getters: {
    balance: (state) => {
      const lastStatement: Statement | undefined = state.statements.slice(-1).pop();
      if (lastStatement === undefined) {
        return '---';
      } else {
        return lastStatement.monetaryTotal();
      }
    },
  },
  mutations: {
    authenticate(state, customer: Customer) {
      state.authenticated = true;
      state.customer = customer;
    },
    logoff(state) {
      state.authenticated = false;
    },
  },
  actions: {
  },
});
