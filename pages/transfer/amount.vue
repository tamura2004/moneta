<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込金額を入力して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          name="金額"
          label="金額"
          type="number"
          :value="amount"
          :rules="[v => v < account.total - fee || '残高が不足しています']"
          @input="$store.commit('transfer/amount', $event)"
        ></v-text-field>
        <v-btn
          nuxt
          dark
          color="primary"
          :disabled="!valid"
          @click="transfer"
        >振込実行</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  middleware: ['hasBank', 'hasBranch', 'hasAccount'],
  data: () => ({
    valid: true,
  }),
  computed: {
    ...mapGetters('transfer', ['fee', 'amount']),
    ...mapGetters('login', ['account']),
  },
  methods: {
    transfer() {
      this.transferFrom();
      this.transferTo();
      this.$router.push('/');
    },
    transferFrom() {
      let total = this.account.total;
      total -= this.fee;
      this.$store.dispatch('transfer/payFee', total);
      this.$store.dispatch('transfer/addStatementPayFee', total);
      total -= this.amount;
      this.$store.dispatch('transfer/payTransfer', total);
      this.$store.dispatch('transfer/addStatementPayTransfer', total);
    },
    transferTo() {
      const account = this.$store.getters['transfer/account'];
      let total = account.total;
      total += parseInt(this.amount);
      this.$store.dispatch('transfer/receiveTransfer', total);
      this.$store.dispatch('transfer/addStatementReceiveTransfer', total);
    },
  },
}
</script>
