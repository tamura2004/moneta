<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先支店を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select
          v-model="$transfer.branchId"
          :items="$read('branches', { bankId: $transfer.bankId })"
        />
        <v-btn nuxt dark to="account" color="primary" :disable="!$transfer.branchId">次へ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  middleware: "hasBank",
};
</script>