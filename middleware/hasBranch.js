export default function ({ store, redirect }) {
  if (!store.getters['transfer/branchId']) {
    return redirect('/transfer/branch');
  }
}
