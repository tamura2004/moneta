<template>
  <v-card>
    <list-toolbar title="口座一覧"></list-toolbar>
    <v-divider></v-divider>
    <app-list
      v-for="account in accounts"
      :account="account"
      :key="account.id"
      @delete="remove(account.id)"
    ></app-list>
    <list-actions collection="accounts"></list-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appList from "~/components/pages/account/app-list";
import listToolbar from "~/components/ui/list-toolbar";
import listActions from "~/components/ui/list-actions";

export default {
  layout: "admin",
  components: { appList, listToolbar, listActions },
  computed: {
    ...mapGetters("accounts", ["accounts"]),
    ...mapGetters("nav/edit", ["edit"]),
  },
  methods: mapActions("accounts", ["remove"]),
  methods: mapActions("nav/edit", ["toggle"]),
};
</script>
