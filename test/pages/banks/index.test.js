import { shallowMount, createLocalVue } from "@vue/test-utils";
import Component from "~/pages/admin/banks/index.vue";
import Vuex from "vuex";

describe("pages/admin/banks/index.vue", () => {
  test("is Vue instance", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
      modules: {
        banks: {
          namespaced: true,
          getters: {
            banks: state => [],
          },
          actions: {
            remove: () => {},
          },
        },
        nav: {
          namespaced: true,
          modules: {
            namespaced: true,
            edit: {
              getters: {
                edit: state => null,
              },
              actions: {
                toggle: () => {},
              },
            },
          },
        },
      },
    });
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      stubs: {
        "v-card": true,
        "v-divider": true,
      },
      mocks: {
        $title: () => {},
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
