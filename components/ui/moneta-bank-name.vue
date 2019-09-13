<template>
  <span>{{ bank | name}}</span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters("nav", ["loginId"]),
    ...mapGetters("accounts", ["accounts"]),
    ...mapGetters("branches", ["branches"]),
    ...mapGetters("banks", ["banks"]),
    account() {
      return this.accounts.find(v => v.id === this.loginId);
    },
    branch() {
      return this.branches.find(v => v.id === this.account.branchId);
    },
    bank() {
      const id = this.id || this.branch.bankId;
      return this.banks.find(v => v.id === id);
    },
  },
};
</script>