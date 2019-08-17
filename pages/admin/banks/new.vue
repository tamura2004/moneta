<template>
  <bank-form title="銀行情報新規登録" @click="save"></bank-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import bankForm from "~/components/pages/bank-form.vue";

export default {
  components: {
    bankForm,
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
