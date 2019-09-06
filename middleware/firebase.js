export default ({ store }) => {
  store.dispatch("banks/listen");
  store.dispatch("branches/listen");
  store.dispatch("accounts/listen");
  store.dispatch("statements/listen");
};
