<template>
  <app-form title="銀行情報新規登録" @click="save"></app-form>
</template>

<script>
import appForm from "~/components/pages/bank/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
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
