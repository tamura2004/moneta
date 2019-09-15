<template>
  <v-card>
    <list-toolbar title="銀行一覧"></list-toolbar>
    <v-divider></v-divider>
    <app-list v-for="bank in $read('banks')" :bank="bank" :key="bank.id" />
    <list-actions collection="banks"></list-actions>
  </v-card>
</template>

<script>
import appList from "~/components/pages/bank/app-list";

export default {
  layout: "admin",
  components: { appList },
};
</script>
