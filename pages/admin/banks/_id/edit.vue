<template>
  <app-form title="銀行情報編集" @click="save"></app-form>
</template>

<script>
import appForm from "~/components/pages/bank/app-form.vue";

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
    this.$bank.data = this.$read("banks", this.id);
  },
  methods: {
    save() {
      this.$write("banks", this.$bank.data);
      this.$router.push("/admin/banks");
    },
  },
};
</script>
