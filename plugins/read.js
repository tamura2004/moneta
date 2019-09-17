export default ({ store }, inject) => {
  inject("read", (name, param) => {
    const base = store.getters[`${name}/collection`];

    if (typeof base === "undefined") {
      return store.getters[`${name}/${param}`];
    }

    const collection = base.map(v => ({ ...v, text: v.name, value: v.id }));

    if (typeof param === "undefined" || param === null) {
      return collection;
    } else if (typeof param === "string") {
      return collection.find(v => v.id === param);
    } else if (typeof param === "function") {
      return collection.filter(v => param(v));
    } else if (typeof param === "object") {
      return collection.filter(v =>
        Object.entries(param).every(([key, val]) => v[key] === val),
      );
    }
  });
};
