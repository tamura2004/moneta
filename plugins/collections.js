export default ({ store }, inject) => {
  // // get collection
  // this.$read("banks")

  // // get filtered collection
  // this.$read("banks", bank => bank.id === this.bankId)

  // // get member
  // this.$read("banks", id)

  inject("read", (name, param) => {
    const collection = store.getters[`${name}/collection`].map(v =>
      Object.assign(v, { text: v.name, value: v.id }),
    );

    if (typeof param === "string") {
      return collection.find(v => v.id === param);
    } else if (typeof param === "function") {
      return collection.fileter(v => param(v));
    } else {
      return collection;
    }
  });

  // // insert
  // this.$write("banks", data)

  // // update
  // this.$write("banks", {id, data})

  // // delete member
  // this.$delete("banks", id)
};
