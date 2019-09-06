<template>
  <v-btn small color="light" :to="`/admin/${collection}/${id}/edit`" v-show="edit">
    <v-icon left>mdi-pencil</v-icon>編集
  </v-btn>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["collection", "id"],
  computed: {
    edit() {
      return this.$store.getters["nav/edit"];
    },
  },
};
</script>
