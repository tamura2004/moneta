<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <menu-button v-for="(menu, index) in menues" :key="index" :to="menu.path">{{ menu.label }}</menu-button>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
export default {
  middleware: "login",
  computed: {
    menues() {
      return [
        { path: "/balance", label: "残高照会" },
        { path: "/statements", label: "入出金明細" },
        { path: "/transfer/bank", label: "振込" },
        { path: "/admin/banks", label: "管理画面" },
      ];
    },
  },
};
</script>
