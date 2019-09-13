<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込金額を入力して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          label="金額"
          type="number"
          v-model="amount"
          :rules="rules"
        />
        <v-btn color="primary" :disabled="!valid" @click="transfer">振込実行</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";
import { mapItems } from "~/plugins/mapItems";

export default {
  middleware: ["hasBank", "hasBranch", "hasAccount"],
  computed: {
    ...mapAccessors("form/transfer", ["amount"]),
    ...mapAccessors("nav", ["loginId", "valid"]),
    ...mapItems(["accounts"]),
    account() {
      this.accounts.find(v => v.id === this.loginId);
    },
    rules() {
      return [
        v => this.account || "口座がありません",
        // v => v < this.account.total - this.fee || "残高が不足しています",
        v => typeof v === "number" || "金額は数字で入力してください",
      ];
    },
    fee() {
      return this.amount < 30000 ? 210 : 432;
    },
  },
  methods: {
    transfer() {
      this.transferFrom();
      this.transferTo();
      this.$router.push("/");
    },
    transferFrom() {
      let total = this.account.total;
      total -= this.fee;
      this.$store.dispatch("transfer/payFee", total);
      this.$store.dispatch("transfer/addStatementPayFee", total);
      total -= this.amount;
      this.$store.dispatch("transfer/payTransfer", total);
      this.$store.dispatch("transfer/addStatementPayTransfer", total);
    },
    transferTo() {
      const account = this.$store.getters["transfer/account"];
      let total = account.total;
      total += parseInt(this.amount);
      this.$store.dispatch("transfer/receiveTransfer", total);
      this.$store.dispatch("transfer/addStatementReceiveTransfer", total);
    },
  },
};
</script>
