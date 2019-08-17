import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
const localVue = createLocalVue();
localVue.use(Vuex);

import { state, mutations, actions, getters } from "~/store/form/bank";

describe("store/banks", () => {
  const store = new Vuex.Store({ state, getters, mutations, actions });

  test("initial state", async () => {
    expect(store.state).toMatchObject({ id: null, name: null, num: null });
  });
});

