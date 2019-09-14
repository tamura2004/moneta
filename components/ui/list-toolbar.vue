<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch class="pt-8" color="primary" v-model="edit" label="編集"></v-switch>
    </v-toolbar>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";

export default {
  props: ["title"],
  computed: mapAccessors("nav", ["edit"]),
};
</script>
