<template>
  <v-card class="mt-4">
    <list-toolbar title="銀行一覧" :edit="edit" @change="edit = !edit"></list-toolbar>
    <v-divider></v-divider>
    <bank-list
      v-for="bank in banks"
      :bank="bank"
      :edit="edit"
      :key="bank.id"
      @delete="remove(bank.id).then(() => edit = false)"
    ></bank-list>
    <list-actions :edit="edit" to="/admin/banks/new"></list-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import bankList from "~/components/pages/bank-list";
import listToolbar from "~/components/layouts/list-toolbar";
import listActions from "~/components/layouts/list-actions";

export default {
  components: { bankList, listToolbar, listActions },
  data: () => ({
    edit: false,
  }),
  computed: mapGetters("banks", ["banks"]),
  methods: mapActions("banks", ["remove"]),
};
</script>
