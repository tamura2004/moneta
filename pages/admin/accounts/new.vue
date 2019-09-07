<template>
  <app-form title="口座情報新規登録" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appForm from "~/components/pages/account/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
  created() {
    this.clear();
  },
  computed: mapGetters("form/account", ["data"]),
  methods: {
    ...mapActions("form/account", ["clear"]),
    ...mapActions("accounts", ["add"]),
    async save() {
      await this.add(this.data);
      this.$router.push("/admin/accounts");
    },
  },
};
</script>
