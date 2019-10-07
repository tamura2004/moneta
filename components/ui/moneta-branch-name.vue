<template>
  <span>{{ branch | name }}</span>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    branch() {
      const id = this.id || this.$session.account.branchId;
      return this.$read("branches", id);
    },
  },
};
</script>