export default ({ store }, inject) => {

  /**
   * Vuex読み出しユーティリティ
   * @param { String } name Vuexのモジュール名
   * @param { undefined | String | Function } param
   * @return { [Object] | Object }
   */
  inject("read", (name, param) => {
    const base = store.getters[`${name}/collection`];

    if (typeof base === "undefined") {
      return store.getters[`${name}/${param}`];
    }

    const collection = base.map(v =>
      Object.assign(v, { text: v.name, value: v.id }),
    );

    if (typeof param === "string") {
      return collection.find(v => v.id === param);

    } else if (typeof param === "function") {
      return collection.filter(v => param(v));

    } else {
      return collection;
    }
  });
};
