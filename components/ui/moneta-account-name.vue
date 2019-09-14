<template>
  <span>{{ account | name}}様</span>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    account() {
      const id = this.id || this.$read("session", "id");
      return this.$read("accounts", id);
    },
  },
};
</script>