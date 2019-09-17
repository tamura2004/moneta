<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先銀行を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select v-model="$transfer.bankId" :items="$read('banks')" />
        <v-btn nuxt dark to="branch" color="primary" :disabled="!$transfer.bankId">
          次へ
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
