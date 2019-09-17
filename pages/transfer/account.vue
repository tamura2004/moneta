<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先口座を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select
          v-model="$transfer.accountId"
          :items="$read('accounts', { branchId: $transfer.branchId })"
        />
        <v-btn dark @click="click" color="primary" :disabled="!$transfer.accountId">次へ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  middleware: ["hasBank", "hasBranch"],
  methods: {
    click() {
      this.$transfer.account = this.$read("accounts", this.$transfer.accountId);
      this.$transfer.total = this.$transfer.account.total;
      this.$router.push("amount");
    }
  }
};
</script>
