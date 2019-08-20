<template>
  <v-card class="mt-4">
    <list-toolbar title="不備・障害一覧"></list-toolbar>
    <v-divider></v-divider>
    <app-list
      v-for="bug in bugs"
      :bug="bug"
      :key="bug.id"
      @delete="remove(bug.id)"
    ></app-list>
    <list-actions collection="bugs"></list-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appList from "~/components/pages/bug/app-list";
import listToolbar from "~/components/ui/list-toolbar";
import listActions from "~/components/ui/list-actions";

export default {
  layout: "admin",
  components: { appList, listToolbar, listActions },
  computed: {
    ...mapGetters("bugs", ["bugs"]),
    ...mapGetters("nav/edit", ["edit"]),
  },
  methods: mapActions("bugs", ["remove"]),
  methods: mapActions("nav/edit", ["toggle"]),
};
</script>
