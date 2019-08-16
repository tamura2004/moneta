import {
  state as fstate,
  mutations,
  actions,
  getters,
} from "~/store/form/bank";

const state = fstate();

describe("plugins/form", () => {
  test("state", () => {
    expect(state).toEqual({ id: null, name: null, num: null });
  });

  test("mutations", () => {
    mutations.id(state, "abc");
    mutations.name(state, "目黒中央銀行");
    mutations.num(state, "0001");

    expect(state).toEqual({ id: "abc", name: "目黒中央銀行", num: "0001" });
  });

  test("getters", () => {
    expect(getters.id(state)).toBe("abc");
    expect(getters.name(state)).toBe("目黒中央銀行");
    expect(getters.num(state)).toBe("0001");
    expect(getters.data(state)).toEqual({ name: "目黒中央銀行", num: "0001" });
    expect(getters.bank(state)).toEqual({ name: "目黒中央銀行", num: "0001" });
  });

  test("actions", () => {
    const commit = (label, value) => mutations[label](state, value);

    actions.new({ commit });
    expect(state).toEqual({ id: null, name: null, num: null });

    const rootGetters = {
      "banks/member": id => ({ name: "目黒中央銀行", num: "0001" }),
    };
    actions.edit({ commit, rootGetters }, "abc");
    expect(state).toEqual({ id: "abc", name: "目黒中央銀行", num: "0001" });

    const dispatch = (action, payload, option) => {
      if (action === "banks/add") {
        expect(payload).toEqual({ name: "目黒中央銀行", num: "0001" });
        expect(option).toEqual({ root: true });
      } else if (action === "banks/modify") {
        expect(payload).toEqual({
          id: "abc",
          data: { name: "目黒中央銀行", num: "0001" },
        });
      }

      actions.add({ getters, dispatch });
      actions.modify({ getters, dispatch });
    };
  });
});
