<template>
  <moneta-branch-form title="支店情報編集" @click="save"></moneta-branch-form>
</template>

<script>
export default {
  layout: "admin",
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  created() {
    this.$branch.data = this.$read("branches", this.id);
  },
  methods: {
    save() {
      this.$write("branches", this.$branch);
      this.$router.push("/admin/branches");
    },
  },
};
</script>
