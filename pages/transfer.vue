<template>
  <div>
    <v-list class="elevation-6">
      <the-transfer-from />
      <the-transfer-to />
    </v-list>
    <nuxt-child />
  </div>
</template>

<script>
import theTransferFrom from "~/components/the-transfer-from";
import theTransferTo from "~/components/the-transfer-to";

export default {
  middleware: "login",
  components: {
    theTransferFrom,
    theTransferTo,
  },
};
</script>
