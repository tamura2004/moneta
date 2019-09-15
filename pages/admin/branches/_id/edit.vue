<template>
  <app-form title="支店情報編集" @click="save"></app-form>
</template>

<script>
import appForm from "~/components/pages/branch/app-form.vue";

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
