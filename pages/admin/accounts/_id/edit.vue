<template>
  <moneta-account-form title="口座情報編集" @click="save"></moneta-account-form>
</template>

<script>
export default {
  layout: "admin",
  fetch({ app, params }) {
    app.$account.data = app.$read("accounts", params.id)
  },
  methods: {
    save() {
      this.$write("accounts", this.$account);
      this.$router.push("/admin/accounts");
    },
  },
};
</script>
