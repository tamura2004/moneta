<template>
  <bank-form>
    <v-btn
      color="primary"
      @click="modify('banks').then(() => $router.push('/admin/banks'))"
    >
      登録
    </v-btn>
  </bank-form>
</template>

<script>
import { mapActions } from "vuex";
import bankForm from "~/components/pages/bank-form.vue";

export default {
  components: {
    bankForm,
  },
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  created() {
    this.edit(this.id);
  },
  methods: mapActions("form/bank", ["edit", "modify"]),
};
</script>
