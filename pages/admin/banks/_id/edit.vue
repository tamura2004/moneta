<template>
  <moneta-bank-form title="銀行情報編集" @click="save"></moneta-bank-form>
</template>

<script>
export default {
  layout: "admin",
  fetch({ app, params }) {
    app.$bank.data = app.$read("banks", params.id)
  },
  methods: {
    save() {
      this.$write("banks", this.$bank.data);
      this.$router.push("/admin/banks");
    },
  },
};
</script>
