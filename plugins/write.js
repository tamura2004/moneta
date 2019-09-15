/**
 * write("banks", data) -> dispatch("banks/add", data)
 * write("banks", { id, data }) -> dispatch("banks/modify", { id, data })
 */

export default ({ store }, inject) => {
  inject("write", (name, params) => {
    const { id, data } = params;
    if (typeof data === "undefined") {
      store.dispatch(`${name}/add`, params);
    } else if (typeof id === "string") {
      store.dispatch(`${name}/modify`, { id, data });
    } else {
      alert(`Bad $write params: ${params}`)
    }
  });
};
