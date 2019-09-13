<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先口座を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select v-model="accountId" :items="accountItems" />
        <v-btn nuxt dark to="amount" color="primary" :disabled="!accountId">次へ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";
import { mapItems } from "~/plugins/mapItems";

export default {
  middleware: ["hasBank", "hasBranch"],
  computed: {
    ...mapAccessors("transfer", ["bankId", "branchId", "accountId"]),
    ...mapItems(["accounts"]),
    accountItems() {
      return this.accounts.filter(v => v.branchId === this.branchId);
    },
  },
};
</script>
