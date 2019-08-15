<template functional>
  <v-btn
    :to="to"
    class="menu my-4"
    nuxt
    rounded
    dark
    block
    large
    color="primary"
  >
    <slot />
  </v-btn>
</template>

<script>
import baseMenuButton from "~/components/base-menu-button";

export default {
  props: ["to"],
};
</script>

<style scoped>
.v-btn.menu {
  height: 60px;
  font-size: 32px;
}
</style>
