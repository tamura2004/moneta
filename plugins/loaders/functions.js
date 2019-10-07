import { basename } from "path";

const req = require.context("~/plugins/functions", false, /\.js$/);
export default (context, inject) => {
  for (const file of req.keys()) {
    const name = basename(file, ".js");
    const fn = req(file).default;
    inject(name, fn(context));
  }
};
