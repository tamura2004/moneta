const context = require.context("~/assets/data/", true, /\.js$/);
const values = {};

for (const file of context.keys()) {
  const { DATA } = context(file);
  const key = file.replace(/^\.\/|\.js$/g, "");
  values[key] = DATA;
}

export const state = () => ({
  values,
});

export const getters = {
  collection: state => key => values[key],
};
