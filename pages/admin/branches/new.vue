<template>
  <app-form title="支店情報新規登録" @click="save"></app-form>
</template>

<script>
import appForm from "~/components/pages/branch/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
  created() {
    this.$branch.data = null;
  },
  methods: {
    save() {
      this.$write("branches", this.$branch.data);
      this.$router.push("/admin/branches");
    },
  },
};
</script>
