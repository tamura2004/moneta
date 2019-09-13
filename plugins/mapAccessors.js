export function mapAccessors(store, names) {
  const base = names.map(name => ({
    [name] : {
      get() {
        return this.$store.getters[`${store}/${name}`];
      },
      set(value) {
        this.$store.dispatch(`${store}/${name}`, value);
      }
    }
  }));
  return Object.assign(...base);
}
