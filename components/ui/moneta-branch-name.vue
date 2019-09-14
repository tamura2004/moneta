<template>
  <span>{{ branch | name }}</span>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    account() {
      return this.$read("accounts", this.$read("session", "id"));
    },
    branch() {
      const id = this.id || this.account.branchId;
      return this.$read("branches", id);
    },
  },
};
</script>