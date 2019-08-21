<template>
  <app-form title="不備・障害新規登録" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appForm from "~/components/pages/bug/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
  created() {
    this.clear();
  },
  computed: mapGetters("form/bug", ["data"]),
  methods: {
    ...mapActions("form/bug", ["clear"]),
    ...mapActions("bugs", ["add"]),
    async save() {
      debugger
      await this.add(this.data);
      this.$router.push("/admin/bugs");
    },
  },
};
</script>
