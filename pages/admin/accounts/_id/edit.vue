<template>
  <app-form title="口座情報編集" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mapAccessors } from "~/plugins/mapAccessors";
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
    const account = this.accounts.find(v => v.id === this.id);
    if (!account) {
      alert("口座がありません");
      this.$router.push("/admin/accounts/new");
    } else {
      this.data = account;
    }
  },
  computed: {
    ...mapAccessors("form/account", ["data"]),
    ...mapGetters("accounts", ["accounts"]),
  },
  methods: {
    ...mapActions("accounts", ["modify"]),
    save() {
      const { id, data } = this;
      this.modify({ id, data });
      this.$router.push("/admin/accounts");
    },
  },
};
</script>
