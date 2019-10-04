export default ({ store }, inject) => {
  inject("read", (name, param) => {
    const base = store.getters[`${name}/collection`];
    const first = base && base[0];
    const selectable = first &&
      first.hasOwnProperty("name") && first.hasOwnProperty("id");

    const collection = selectable
      ? base.map(v => ({ ...v, text: v.name, value: v.id }))
      : base;

    // コレクションでないなら、メンバを返す
    // $read("nav", "title")など
    if (typeof collection === "undefined") {
      return store.getters[`${name}/${param}`];
    }

    // 対象が空ならそのまま返す
    if (typeof first === "undefined") {
      return collection;
    }

    // ストアが単純な文字列の配列の場合
    if (typeof first === "string") {
      if (typeof param === "function") {
        return collection.filter(v => param(v));
      } else {
        return collection;
      }
    }

    // 引数が文字列ならidとみなす
    if (typeof param === "string") {
      return collection.find(v => v.id === param);
    }

    // 引数が関数なら、選択評価関数とみなす
    if (typeof param === "function") {
      return collection.filter(v => param(v));
    }

    // 引数がobjectなら、mongoと同じ選択式とみなす
    if (typeof param === "object" && param !== null) {
      return collection.filter(v =>
        Object.entries(param).every(([key, val]) => v[key] === val),
      );
    }

    // それ以外ならコレクションをそのまま返す
    return collection;
  });
};
