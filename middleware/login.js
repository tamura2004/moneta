export default function({ store, redirect }) {
  if (!store.getters["session/id"]) {
    return redirect("/login");
  }
}
