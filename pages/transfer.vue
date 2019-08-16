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
import theTransferFrom from "~/components/pages/transfer-from";
import theTransferTo from "~/components/pages/transfer-to";

export default {
  middleware: "login",
  components: {
    theTransferFrom,
    theTransferTo,
  },
};
</script>
