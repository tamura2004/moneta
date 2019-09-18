import { shallowMount, createLocalVue } from "@vue/test-utils";
import Component from "~/pages/admin/banks/index.vue";

describe("pages/admin/banks/index.vue", () => {
  test("is Vue instance", () => {
    const localVue = createLocalVue();
    const wrapper = shallowMount(Component, {
      localVue,
      stubs: [
        "v-card",
        "v-divider",
        "list-toolbar",
        "list-actions",
        "app-list",
      ],
      mocks: {
        $read: () => [],
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
