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
import { mapActions } from "vuex";

export default {
  props: ["title"],
  methods: mapActions("nav/edit", ["edit", "toggle"])
};
</script>
