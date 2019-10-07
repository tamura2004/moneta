export default function({ app, redirect }) {
  if (!app.$session.account) {
    return redirect("/login");
  }
}
