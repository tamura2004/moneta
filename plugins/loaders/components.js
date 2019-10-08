import { basename } from "path";
import Vue from "vue";

// コンポーネントを一括登録
const context = require.context("~/components", true, /\.vue$/);
for (const path of context.keys()) {
  const name = basename(path, ".vue");
  const component = context(path).default;
  Vue.component(name, component);
}
