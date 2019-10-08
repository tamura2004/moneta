<template>
  <div>
    <v-subheader class="header">振込元</v-subheader>
    <v-list-item two-lines>
      <v-list-item-content>
        <v-list-item-title>
          <v-layout>
            <v-flex xs4><moneta-bank-name /></v-flex>
            <v-flex xs1>{{ $session.account.kind }}</v-flex>
            <v-flex xs3>{{ $session.account.num }}</v-flex>
            <v-flex xs1>残高</v-flex>
            <v-flex xs3>{{ $session.account.total | yen }}</v-flex>
          </v-layout>
        </v-list-item-title>
        <v-list-item-title>
          <v-layout>
            <v-flex xs4><moneta-branch-name /></v-flex>
            <v-flex xs4><moneta-account-name /></v-flex>
            <v-flex xs1>振込後</v-flex>
            <v-flex xs3>{{ ($session.account.total - amount - fee) | yen }}</v-flex>
          </v-layout>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
export default {
  middleware: "login",
  computed: {
    amount() {
      return this.$read("form/transfer", "amount")
    },
    fee() {
      return this.amount < 30000 ? 220 : 432;
    },
  },
};
</script>
