export default function({ store, redirect }) {
  if (!store.getters["login/id"]) {
    return redirect("/login");
  }
}
