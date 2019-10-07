import { basename } from "path";
import Vue from "vue";

const loadComponent = (context) => {
  context.keys().forEach(file => {
    const name = basename(file, ".vue");
    const component = context(file).default;
    Vue.component(name, component);
  });
}

// コンポーネントを一括登録
loadComponent(require.context("~/components/layouts", false, /\.vue$/));
loadComponent(require.context("~/components/ui", false, /\.vue$/));
