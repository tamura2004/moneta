<template>
  <v-card>
    <list-toolbar title="口座一覧"></list-toolbar>
    <v-divider></v-divider>
    <app-list v-for="account in accounts" :account="account" :key="account.id"></app-list>
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
    accounts() {
      return this.$store.state.accounts.values;
    },
  },
  created() {
    this.$store.dispatch("nav/edit", false); // 編集ボタンを初期化
  }
};
</script>
