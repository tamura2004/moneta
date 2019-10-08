<template>
  <moneta-bank-form title="銀行情報新規登録" @click="save"></moneta-bank-form>
</template>

<script>
export default {
  layout: "admin",
  created() {
    this.$bank.data = null;
  },
  methods: {
    save() {
      this.$write("banks", this.$bank.data);
      this.$router.push("/admin/banks");
    },
  },
};
</script>
