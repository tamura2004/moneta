<template>
  <app-form title="口座情報新規登録" @click="save"></app-form>
</template>

<script>
export default {
  layout: "admin",
  fetch({ app }) {
    app.$account.data = null;
  },
  methods: {
    save() {
      this.$write("accounts", this.$account.data);
      this.$router.push("/admin/accounts");
    },
  },
};
</script>
