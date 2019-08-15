export default function({ store, redirect }) {
  if (!store.getters["transfer/accountId"]) {
    return redirect("/transfer/account");
  }
}
