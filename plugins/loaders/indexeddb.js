export default function({ store }) {
  store.dispatch("banks/read");
  store.dispatch("branches/read");
  store.dispatch("accounts/read");
}
