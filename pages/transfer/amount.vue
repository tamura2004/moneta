<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込金額を入力して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="$nav.valid">
        <v-text-field label="金額" v-model.number="$transfer.amount" type="number" :rules="rules" />
        <v-btn color="primary" :disabled="!$nav.valid" to="/transfer/pay/fee">振込実行</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  middleware: ["hasBank", "hasBranch", "hasAccount"],
  computed: {
    rules() {
      return [
        v => !!v || "振込金額を入力してください",
        v =>
          v < this.$session.account.total - this.fee || "残高が不足しています",
      ];
    },
    fee() {
      return this.amount < 30000 ? 210 : 432;
    },
  },
};
</script>
