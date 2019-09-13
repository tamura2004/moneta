<template>
  <app-form title="銀行情報新規登録" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mapAccessors } from "~/plugins/mapAccessors";
import appForm from "~/components/pages/bank/app-form.vue";

export default {
  layout: "admin",
  components: {
    appForm,
  },
  computed: mapAccessors("form/bank", ["data"]),
  created() {
    this.data = null;
  },
  methods: {
    ...mapActions("banks", ["add"]),
    save() {
      this.add(this.data);
      this.$router.push("/admin/banks");
    },
  },
};
</script>
