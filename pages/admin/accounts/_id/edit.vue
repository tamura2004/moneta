<template>
  <app-form title="口座情報編集" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appForm from "~/components/pages/account/app-form.vue";

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
    const account = this.account(this.id);
    if (account === undefined) {
      this.$router.push("/admin/accounts/new");
    } else {
      this.edit(this.account(this.id));
    }
  },
  computed: {
    ...mapGetters("form/account", ["data"]),
    ...mapGetters("accounts", ["account"]),
  },
  methods: {
    ...mapActions("form/account", ["edit"]),
    ...mapActions("accounts", ["modify"]),
    async save() {
      const { id, data } = this;
      await this.modify({ id, data });
      this.$router.push("/admin/accounts");
    },
  },
};
</script>
