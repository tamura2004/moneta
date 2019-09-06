<template>
  <v-card>
    <list-toolbar title="支店一覧"></list-toolbar>
    <v-divider></v-divider>
    <app-list
      v-for="branch in branches"
      :branch="branch"
      :key="branch.id"
      @delete="remove(branch.id)"
    ></app-list>
    <list-actions collection="branches"></list-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appList from "~/components/pages/branch/app-list";
import listToolbar from "~/components/ui/list-toolbar";
import listActions from "~/components/ui/list-actions";

export default {
  layout: "admin",
  components: { appList, listToolbar, listActions },
  computed: {
    branches() {
      return this.$store.getters["branches/collection"]("ALL");
    },
  },
  methods: {
    remove(id) {
      this.$store.dispatch("branches/remove", id);
    },
  },
};
</script>
