<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先銀行を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select v-model="bankId" :items="banks" />
        <v-btn nuxt dark to="branch" color="primary" :disabled="!bankId">
          次へ
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";
import { mapItems } from "~/plugins/mapItems";

export default {
  computed: {
    ...mapAccessors("form/transfer", ["bankId"]),
    ...mapItems(["banks"]),
  },
};
</script>
