import Vue from "vue";

export const show = key => v => (v && v[key] ? v[key] : "----");
export const date = v =>
  v && v.toDate
    ? v
        .toDate()
        .toISOString()
        .substr(0, 19)
        .replace("T", " ")
    : "----";
export const yen = v => (v ? "￥" + v.toLocaleString() + "-" : "----");

Vue.filter("date", date);
Vue.filter("yen", yen);
Vue.filter("name", show("name"));
Vue.filter("kind", show("kind"));
Vue.filter("num", show("num"));
