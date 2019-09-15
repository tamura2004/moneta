<template>
  <app-form title="口座情報編集" @click="save"></app-form>
</template>

<script>
import appForm from "~/components/pages/account/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  created() {
    this.$account.data = this.$read("accounts", this.id);
  },
  methods: {
    save() {
      this.$write("accounts", this.$account);
      this.$router.push("/admin/accounts");
    },
  },
};
</script>
