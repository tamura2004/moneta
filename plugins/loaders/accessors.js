import { basename } from "path";

// store/form配下をaccessorとして一括inject
export default ({ store }, inject) => {
  const context = require.context("~/store/form", false, /\.js$/);
  context.keys().forEach(file => {
    const name = basename(file, ".js");
    const set = context(file).accessors;
    inject(name, set("form/" + name, store));
  });
};
