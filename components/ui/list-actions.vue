<template>
  <v-card-actions class="pa-4">
    <v-btn small color="primary" :to="`/admin/${collection}/new`" :disabled="!edit">
      <v-icon left>mdi-plus</v-icon>追加
    </v-btn>
  </v-card-actions>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["collection"],
  computed: mapGetters("nav", ["edit"]),
};
</script>
