<template>
  <v-card>
    <list-toolbar title="口座一覧"></list-toolbar>
    <v-divider></v-divider>
    <app-list v-for="account in $read('accounts')" :account="account" :key="account.id"></app-list>
    <list-actions collection="accounts"></list-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appList from "~/components/pages/account/app-list";


export default {
  layout: "admin",
  components: { appList },
};
</script>
