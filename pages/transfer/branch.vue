<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先支店を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select v-model="branchId" :items="branches" />
        <v-btn nuxt dark to="account" color="primary" :disable="!branchId">次へ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";
import { mapItems } from "~/plugins/mapItems";

export default {
  middleware: "hasBank",
  computed: {
    ...mapAccessors("transfer", ["bankId", "branchId"]),
    ...mapItems(["branches"]),
    branchItems() {
      return this.branches.filter(v => v.bankId === this.bankId);
    },
  },
};
</script>
