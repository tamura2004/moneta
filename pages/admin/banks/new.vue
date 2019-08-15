<template>
  <base-bank-form>
    <v-btn color="primary" @click="add().then(()=>$router.push('/admin/banks'))">
      登録
    </v-btn>
  </base-bank-form>
</template>

<script>
import { mapActions } from "vuex";
import baseBankForm from "~/components/base-bank-form.vue";

export default {
  components: {
    baseBankForm,
  },
  created () {
    this.new();
  },
  methods: mapActions("form/bank", ["new", "add"]),
};
</script>
