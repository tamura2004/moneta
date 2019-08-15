<template>
  <base-bank-form>
    <v-btn color="primary" @click="modify().then(()=>$router.push('/admin/banks'))">登録</v-btn>
  </base-bank-form>
</template>

<script>
import { mapActions } from "vuex";
import baseBankForm from "~/components/base-bank-form.vue";

export default {
  components: {
    baseBankForm
  },
  asyncData({ params }) {
    const id = params.id;
    return { id };
  },
  created() {
    this.edit(this.id);
  },
  methods: mapActions('form/bank', ['edit', 'modify']),
};
</script>
