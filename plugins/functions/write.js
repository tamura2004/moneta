/**
 * write("banks", data) -> dispatch("banks/add", data)
 * write("banks", { id, data }) -> dispatch("banks/modify", { id, data })
 */

export default ({ store }) => (name, opt1, opt2) => {
  if (typeof opt2 === "undefined") {
    store.dispatch(`${name}/write`, opt1);
  } else {
    store.dispatch(`${name}/write`, { ...opt2, id: opt1 });
  }
};
