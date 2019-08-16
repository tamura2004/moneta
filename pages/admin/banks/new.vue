<template>
  <bank-form>
    <v-btn
      color="primary"
      @click="add('banks').then(() => $router.push('/admin/banks'))"
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
  created() {
    this.new();
  },
  methods: mapActions("form/bank", ["new", "add"]),
};
</script>
