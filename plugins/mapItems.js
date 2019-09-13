export function mapItems(collections) {
  const base = collections.map(collection => ({
    [collection]() {
      return this.$store.getters[`${collection}/collection`]
        .map(v => (Object.assign({ text: v.name, value: v.id }, v)));
    },
  }));
  return Object.assign(...base);
}
