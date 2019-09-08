<template>
  <v-btn small color="light" :to="`/admin/${collection}/${id}/edit`" v-show="edit">
    <v-icon left>mdi-pencil</v-icon>編集
  </v-btn>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["collection", "id"],
  computed: mapGetters("nav", ["edit"]),
};
</script>
