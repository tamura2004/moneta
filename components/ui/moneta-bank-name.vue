<template>
  <span>{{ bank | name}}</span>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    bank() {
      const id = this.id || this.$session.account.bankId;
      return this.$read("banks", id);
    },
  },
};
</script>