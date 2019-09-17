<template>
  <div>
    <v-subheader class="header">振込先</v-subheader>
    <v-list-item two-lines>
      <v-list-item-content>
        <v-list-item-title>
          <v-layout>
            <v-flex xs4>
              <moneta-bank-name :id="$transfer.bankId" />
            </v-flex>
            <v-flex xs1>{{ $transfer.account | kind }}</v-flex>
            <v-flex xs3>{{ $transfer.account | num }}</v-flex>
            <v-flex xs1>金額</v-flex>
            <v-flex xs3>{{ $transfer.amount | yen }}</v-flex>
          </v-layout>
        </v-list-item-title>
        <v-list-item-title>
          <v-layout>
            <v-flex xs4>
              <moneta-branch-name :id="$transfer.branchId" />
            </v-flex>
            <v-flex xs4>{{ $transfer.account | name }}</v-flex>
            <v-flex xs1>手数料</v-flex>
            <v-flex xs3>{{ fee | yen }}</v-flex>
          </v-layout>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "login",
  computed: {
    fee() {
      return this.$transfer.amount <= 30000 ? 210 : 421;
    },
  },
};
</script>
