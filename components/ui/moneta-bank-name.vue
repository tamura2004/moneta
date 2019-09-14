<template>
  <span>{{ bank | name}}</span>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    account() {
      return this.$read("accounts", this.$read("session", "id"));
    },
    branch() {
      return this.$read("branches", this.account.branchId);
    },
    bank() {
      const id = this.id || this.branch.bankId;
      return this.$read("banks", id);
    },
  },
};
</script>