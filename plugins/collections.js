export default ({ store }, inject) => {
  inject("banks", store.state.banks.values);
  inject("branches", store.state.branches.values);
  inject("accounts", store.state.accounts.values);
  inject("statements", store.state.statements.values);
  // inject("branches", store.getters["branches/collections"]);
  // inject("accounts", store.getters["accounts/collections"]);
  // inject("statements", store.getters["statements/collections"]);
}
