<template>
  <app-form title="口座情報新規登録" @click="save"></app-form>
</template>

<script>
import appForm from "~/components/pages/account/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
  created() {
    this.$account.data = null;
  },
  methods: {
    save() {
      this.$write("accounts", this.$account.data);
      this.$router.push("/admin/accounts");
    },
  },
};
</script>
