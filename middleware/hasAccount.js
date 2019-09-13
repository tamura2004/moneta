export default function({ store, redirect }) {
  if (!store.getters["form/transfer/accountId"]) {
    return redirect("/transfer/account");
  }
}
