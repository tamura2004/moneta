<template>
  <div>
    <v-list-item two-line>
      <v-list-item-icon>
        <edit-button collection="accounts" :id="account.id"></edit-button>
      </v-list-item-icon>
      <app-list-item :account="account"></app-list-item>
      <v-list-item-action>
        <delete-button collection="accounts" :id="account.id"></delete-button>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import appListItem from "~/components/pages/account/app-list-item";
import editButton from "~/components/ui/edit-button";
import deleteButton from "~/components/ui/delete-button";

export default {
  components: { appListItem, editButton, deleteButton },
  props: ["account"],
};
</script>
