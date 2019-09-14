<template>
  <v-card>
    <list-toolbar title="支店一覧"></list-toolbar>
    <v-divider></v-divider>
    <app-list
      v-for="branch in $read('branches')"
      :branch="branch"
      :key="branch.id"
      @delete="remove(branch.id)"
    ></app-list>
    <list-actions collection="branches"></list-actions>
  </v-card>
</template>

<script>
import appList from "~/components/pages/branch/app-list";

export default {
  layout: "admin",
  components: { appList },
  methods: {
    remove(id) {
      this.$store.dispatch("branches/remove", id);
    },
  },
};
</script>
