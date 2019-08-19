import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
const localVue = createLocalVue();
localVue.use(Vuex);

import Form from "@/plugins/form.js";

describe("plugins/form", () => {
  const form = new Form("forms", ["name", "age"]);
  const store = new Vuex.Store(form);

  test("initial state", () => {
    expect(store.state).toMatchObject({ id: null, name: null, age: null });
  });

  test("mutations", () => {
    store.commit("id", "a001");
    store.commit("name", "太郎");
    store.commit("age", 18);
    expect(store.state).toMatchObject({ id: "a001", name: "太郎", age: 18 });
  });

  test("getters", () => {
    expect(store.getters.id).toBe("a001");
    expect(store.getters.name).toBe("太郎");
    expect(store.getters.age).toBe(18);
    expect(store.getters.data).toMatchObject({ name: "太郎", age: 18 });
  });

  test("actions", async () => {
    await store.dispatch("id", "b002");
    await store.dispatch("name", "次郎");
    await store.dispatch("age", 24);
    expect(store.state).toMatchObject({ id: "b002", name: "次郎", age: 24 });

    await store.dispatch("clear");
    expect(store.state).toMatchObject({ id: null, name: null, age: null });

    await store.dispatch("edit", { id: "d003", name: "三郎" });
    expect(store.state).toMatchObject({ id: "d003", name: "三郎" });

    await store.dispatch("edit", undefined);
    expect(store.state).toMatchObject({ id: null, name: null, age: null });

    await store.dispatch("id", "xyz");
    expect(store.state).toMatchObject({ id: "xyz", name: null, age: null });

    await store.dispatch("name", "四郎");
    expect(store.state).toMatchObject({ id: "xyz", name: "四郎", age: null });

    await store.dispatch("age", 42);
    expect(store.state).toMatchObject({ id: "xyz", name: "四郎", age: 42 });
  });
});
