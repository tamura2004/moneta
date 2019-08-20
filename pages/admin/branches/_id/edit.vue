<template>
  <app-form title="支店情報編集" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import branchForm from "~/components/pages/branch/app-form.vue";

export default {
  layout: "admin",
  components: {
    branchForm,
  },
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  created() {
    const branch = this.branch(this.id);
    if (branch === undefined) {
      this.$router.push("/admin/branches/new");
    } else {
      this.edit(this.branch(this.id));
    }
  },
  computed: {
    ...mapGetters("form/branch", ["data"]),
    ...mapGetters("branches", ["branch"]),
  },
  methods: {
    ...mapActions("form/branch", ["edit"]),
    ...mapActions("branches", ["modify"]),
    async save() {
      const { id, data } = this;
      await this.modify({ id, data });
      this.$router.push("/admin/branches");
    },
  },
};
</script>
