<template>
  <span>{{ account | name}}様</span>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters("nav", ["loginId"]),
    ...mapGetters("accounts", ["accounts"]),
    account() {
      const id = this.id || this.loginId;
      return this.accounts.find(v => v.id === this.loginId);
    },
  },
};
</script>