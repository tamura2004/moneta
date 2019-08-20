<template>
  <app-form title="不備・障害編集" @click="save"></app-form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appForm from "~/components/pages/bug/app-form.vue";

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
    const bug = this.bug(this.id);
    if (bug === undefined) {
      this.$router.push("/admin/bugs/new");
    } else {
      this.edit(this.bug(this.id));
    }
  },
  computed: {
    ...mapGetters("form/bug", ["data"]),
    ...mapGetters("bugs", ["bug"]),
  },
  methods: {
    ...mapActions("form/bug", ["edit"]),
    ...mapActions("bugs", ["modify"]),
    async save() {
      const { id, data } = this;
      await this.modify({ id, data });
      this.$router.push("/admin/bugs");
    },
  },
};
</script>
