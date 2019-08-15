export default function({ store, redirect }) {
  if (!store.getters["transfer/bankId"]) {
    return redirect("/transfer/bank");
  }
}
