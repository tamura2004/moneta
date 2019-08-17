<template>
  <div>
    <v-list-item>
      <v-list-item-icon>
        <edit-button :to="`/admin/banks/${bank.id}/edit`" :edit="edit"></edit-button>
      </v-list-item-icon>
      <bank-list-item :bank="bank"></bank-list-item>
      <v-list-item-action>
        <delete-button @click="$emit('delete')" :edit="edit"></delete-button>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import bankListItem from "~/components/pages/bank-list-item";
import editButton from "~/components/ui/edit-button";
import deleteButton from "~/components/ui/delete-button";

export default {
  components: { bankListItem, editButton, deleteButton },
  props: ["bank", "edit"],
};
</script>
