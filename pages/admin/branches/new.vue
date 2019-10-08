<template>
  <moneta-branch-form title="支店情報新規登録" @click="save"></moneta-branch-form>
</template>

<script>
export default {
  layout: "admin",
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
