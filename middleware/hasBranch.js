export default function({ store, redirect }) {
  if (!store.getters["form/transfer/branchId"]) {
    return redirect("/transfer/branch");
  }
}
