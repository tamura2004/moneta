// 振込処理用データストア

export const state = () => ({
  bankId: null,
  branchId: null,
  accountId: null,
  amount: null,
});

export const getters = {
  bankId: state => state.bankId,
  branchId: state => state.branchId,
  accountId: state => state.accountId,
  amount: state => parseInt(state.amount),
  bank: (state, getters, rootState, rootGetters) =>
    rootGetters["banks/bank"](getters.bankId),
  branch: (state, getters, rootState, rootGetters) =>
    rootGetters["branches/branch"](getters.branchId),
  account: (state, getters, rootState, rootGetters) =>
    rootGetters["accounts/account"](getters.accountId),
  fee: state => (state.amount > 30000 ? 432 : 216), // 30,000を超える振込は手数料432円、以下は216円
};

export const mutations = {
  bankId: (state, bankId) => (state.bankId = bankId),
  branchId: (state, branchId) => (state.branchId = branchId),
  accountId: (state, accountId) => (state.accountId = accountId),
  amount: (state, amount) => (state.amount = amount),
};

export const actions = {
  // 手数料支払い
  payFee({ dispatch, getters, rootGetters }, total) {
    const id = rootGetters["login/id"];
    dispatch("accounts/modify", { id, data: { total } }, { root: true });
  },
  // 振込金額支払い
  payTransfer({ dispatch, getters, rootGetters }, total) {
    const id = rootGetters["login/id"];
    dispatch("accounts/modify", { id, data: { total } }, { root: true });
  },
  // 振込金額入金
  receiveTransfer({ dispatch, getters, rootGetters }, total) {
    const id = getters.accountId;
    dispatch("accounts/modify", { id, data: { total } }, { root: true });
  },
  // 手数料支払いの取引明細を追加
  addStatementPayFee({ getters, rootGetters, dispatch }, total) {
    dispatch(
      "statements/add",
      {
        accountId: rootGetters["login/id"],
        amount: getters.fee,
        total,
        kind: "出金",
        memo: "振込手数料",
      },
      { root: true },
    );
  },
  // 振込金額支払いの取引明細を追加
  addStatementPayTransfer({ getters, rootGetters, dispatch }, total) {
    dispatch(
      "statements/add",
      {
        accountId: rootGetters["login/id"],
        amount: getters.amount,
        total,
        kind: "出金",
        memo: `振込先：${getters.account.name}`,
      },
      { root: true },
    );
  },
  // 振込金額入金の取引明細を追加
  addStatementReceiveTransfer({ getters, rootGetters, dispatch }, total) {
    dispatch(
      "statements/add",
      {
        accountId: getters.accountId,
        amount: getters.amount,
        total,
        kind: "入金",
        memo: `振込元：${rootGetters["login/account"].name}`,
      },
      { root: true },
    );
  },
};
