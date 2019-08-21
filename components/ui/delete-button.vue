<template>
  <v-btn small color="error" @click="remove" v-show="edit">
    <v-icon left>mdi-delete</v-icon>削除
  </v-btn>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["collection", "id"],
  computed: mapGetters("nav/edit", ["edit"]),
  methods: {
    remove() {
      this.$store.dispatch(`${this.collection}/remove`, this.id);
      this.toggle();
    },
    ...mapActions("nav/edit", ["toggle"]),
  },
};
</script>
