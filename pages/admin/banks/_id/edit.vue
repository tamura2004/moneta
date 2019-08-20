<template>
  <app-form title="銀行情報編集" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    const bank = this.bank(this.id);
    if (bank === undefined) {
      this.$router.push("/admin/banks/new");
    } else {
      this.edit(this.bank(this.id));
    }
  },
  computed: {
    ...mapGetters("form/bank", ["data"]),
    ...mapGetters("banks", ["bank"]),
  },
  methods: {
    ...mapActions("form/bank", ["edit"]),
    ...mapActions("banks", ["modify"]),
    async save() {
      const { id, data } = this;
      await this.modify({ id, data });
      this.$router.push("/admin/banks");
    },
  },
};
</script>
