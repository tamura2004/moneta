<template>
  <div>
    <v-list class="elevation-6">
      <transfer-from />
      <transfer-to />
    </v-list>
    <nuxt-child />
  </div>
</template>

<script>
import transferFrom from "~/components/pages/transfer-from";
import transferTo from "~/components/pages/transfer-to";

export default {
  middleware: "login",
  components: {
    transferFrom,
    transferTo,
  },
};
</script>
