export default function({ store, redirect }) {
  if (!store.getters["form/transfer/bankId"]) {
    return redirect("/transfer/bank");
  }
}
