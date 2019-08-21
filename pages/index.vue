<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <menu-button to="balance">残高照会</menu-button>
      <menu-button to="/statements">入出金明細</menu-button>
      <menu-button to="/transfer/bank">振込</menu-button>
      <menu-button to="/admin/banks">管理画面</menu-button>
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import menuButton from "~/components/ui/menu-button";

export default {
  components: { menuButton },
  middleware: "login",
};
</script>
