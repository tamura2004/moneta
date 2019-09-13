<template>
  <span>{{ branch | name }}</span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters("nav", ["loginId"]),
    ...mapGetters("accounts", ["accounts"]),
    ...mapGetters("branches", ["branches"]),
    account() {
      return this.accounts.find(v => v.id === this.loginId);
    },
    branch() {
      const id = this.id || this.account.branchId;
      return this.branches.find(v => v.id === id);
    },
  },
};
</script>