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
    account() {
      return this.$read("accounts", this.$read("session", "id"));
    },
    rules() {
      return [
        v => !!v || "振込金額を入力してください",
        v => v < this.account.total - this.fee || "残高が不足しています",
      ];
    },
    fee() {
      return this.amount < 30000 ? 210 : 432;
    },
  },
  // methods: {
  //   transfer() {
  //     // this.transferFrom();
  //     // this.transferTo();
  //     this.$router.push("/transfer/pay/fee");
  //   },
  //   transferFrom() {
  //     let total = this.account.total;
  //     total -= this.fee;
  //     this.$store.dispatch("transfer/payFee", total);
  //     this.$store.dispatch("transfer/addStatementPayFee", total);
  //     total -= this.amount;
  //     this.$store.dispatch("transfer/payTransfer", total);
  //     this.$store.dispatch("transfer/addStatementPayTransfer", total);
  //   },
  //   transferTo() {
  //     const account = this.$store.getters["transfer/account"];
  //     let total = account.total;
  //     total += parseInt(this.amount);
  //     this.$store.dispatch("transfer/receiveTransfer", total);
  //     this.$store.dispatch("transfer/addStatementReceiveTransfer", total);
  //   },
  // },
};
</script>
