import Form from "@/plugins/form.js";

const form = new Form("forms", ["name", "age"]);
const state = form.state();

describe("plugins/form", () => {
  test("state", () => {
    expect(state).toEqual({ id: null, name: null, age: null});
  });

  test("mutations", () => {
    const state = form.state();
    const mutations = form.mutations;

    mutations.id(state, "abc");
    mutations.name(state, "太郎");
    mutations.age(state, 18);

    expect(state.id).toBe("abc");
    expect(state.name).toBe("太郎");
    expect(state.age).toBe(18);
  });

  test("getters", () => {
    const state = form.state();
    const mutations = form.mutations;
    const getters = form.getters;

    mutations.id(state, "abc");
    mutations.name(state, "太郎");
    mutations.age(state, 18);

    expect(getters.id(state)).toBe("abc");
    expect(getters.name(state)).toBe("太郎");
    expect(getters.age(state)).toBe(18);
    expect(getters.data(state)).toEqual({ name: "太郎", age: 18 });
  });

  test("actions", () => {
    const state = form.state();
    const mutations = form.mutations;
    const getters = form.getters;
    const actions = form.actions;
    const commit = (label, value) => mutations[label](state, value);

    actions.id({ commit }, "abc");
    actions.name({ commit }, "太郎");
    actions.age({ commit }, 18);

    expect(getters.id(state)).toBe("abc");
    expect(getters.name(state)).toBe("太郎");
    expect(getters.age(state)).toBe(18);

    actions.new({ commit });

    expect(state.id).toBeNull();
    expect(state.name).toBeNull();
    expect(state.age).toBeNull();

    const rootGetters = {
      "forms/member": id => ({ name: "太郎", age: 18 }),
    };

    actions.edit({ commit, rootGetters }, "abc");
    expect(getters.id(state)).toBe("abc");
    expect(getters.name(state)).toBe("太郎");
    expect(getters.age(state)).toBe(18);

    const dispatch = (action, payload, option) => {
      if (action === "forms/add") {
        expect(payload).toEqual({ name: "太郎", age: 18 });
        expect(option).toEqual({ root: true });
      } else if (action === "forms/modify") {
        expect(payload).toEqual({ id: "abc", data: { name: "太郎", age: 18 } });
      }

      actions.add({ getters, dispatch });
      actions.modify({ getters, dispatch });
    };
  });
});
