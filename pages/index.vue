<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <v-btn
        nuxt
        to="balance"
        class="menu my-4"
        rounded
        dark
        block
        large
        color="primary"
        >残高照会</v-btn
      >
      <v-btn
        nuxt
        to="statements"
        class="menu my-4"
        rounded
        dark
        block
        large
        color="primary"
        >入出金明細</v-btn
      >
      <v-btn
        nuxt
        to="transfer/bank"
        class="menu my-4"
        rounded
        dark
        block
        large
        color="primary"
        >振込</v-btn
      >
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
export default {
  middleware: "login",
};
</script>

<style scoped>
.v-btn.menu {
  height: 60px;
  font-size: 32px;
}
</style>
