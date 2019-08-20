<template>
  <app-form title="銀行情報新規登録" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appForm from "~/components/pages/bank/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
  created() {
    this.clear();
  },
  computed: mapGetters("form/bank", ["data"]),
  methods: {
    ...mapActions("form/bank", ["clear"]),
    ...mapActions("banks", ["add"]),
    async save() {
      await this.add(this.data);
      this.$router.push("/admin/banks");
    },
  },
};
</script>
