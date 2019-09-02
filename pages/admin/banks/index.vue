<template>
  <v-card>
    <list-toolbar title="銀行一覧"></list-toolbar>
    <v-divider></v-divider>
    <app-list v-for="bank in banks" :bank="bank" :key="bank.id" @delete="remove(bank.id)"></app-list>
    <list-actions collection="banks"></list-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appList from "~/components/pages/bank/app-list";
import listToolbar from "~/components/ui/list-toolbar";
import listActions from "~/components/ui/list-actions";

export default {
  layout: "admin",
  components: { appList, listToolbar, listActions },
  computed: {
    ...mapGetters("banks", ["banks"]),
    ...mapGetters("nav/edit", ["edit"]),
  },
  methods: {
    ...mapActions("banks", ["remove"]),
    ...mapActions("nav/edit", ["toggle"]),
  },
};
</script>
