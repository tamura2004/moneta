export default function({ store, redirect }) {
  if (!store.getters["nav/loginId"]) {
    return redirect("/login");
  }
}
