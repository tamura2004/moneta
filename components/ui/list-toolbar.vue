<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch class="pt-8" color="primary" :value="edit" @change="toggle" label="編集"></v-switch>
    </v-toolbar>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["title"],
  computed: {
    edit() {
      return this.$store.getters["nav/edit"];
    },
  },
  methods: {
    toggle() {
      this.$store.dispatch("nav/edit", !this.edit);
    }
  },
};
</script>
