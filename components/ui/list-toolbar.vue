<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field class="mr-8" label="担当者検索" hide-details @input="set($event)"></v-text-field>
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
    ...mapGetters("nav/query", ["query"]),
    ...mapGetters("nav/edit", ["edit"]),
  },
  methods: {
    ...mapActions("nav/query", ["set"]),
    ...mapActions("nav/edit", ["toggle"]),
  },
};
</script>
