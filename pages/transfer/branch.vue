<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先支店を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select
          item-text="name"
          item-value="id"
          :items="branches(bankId)"
          @input="$store.commit('transfer/branchId', $event)"
        />
        <v-btn nuxt dark to="account" color="primary" :disable="!branchId">
          次へ
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "hasBank",
  computed: {
    ...mapGetters("branches", ["branches"]),
    ...mapGetters("transfer", ["bankId", "branchId"]),
  },
};
</script>
