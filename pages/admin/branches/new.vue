<template>
  <app-form title="支店情報新規登録" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appForm from "~/components/pages/branch/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
  created() {
    this.clear();
  },
  computed: mapGetters("form/branch", ["data"]),
  methods: {
    ...mapActions("form/branch", ["clear"]),
    ...mapActions("branches", ["add"]),
    async save() {
      await this.add(this.data);
      this.$router.push("/admin/branches");
    },
  },
};
</script>
