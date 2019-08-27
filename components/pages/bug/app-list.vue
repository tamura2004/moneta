<template>
  <div>
    <v-list-item>
      <v-list-item-icon>
        <edit-button collection="bugs" :id="bug.id"></edit-button>
      </v-list-item-icon>
      <app-list-item :bug="bug"></app-list-item>
      <v-list-item-action>
        <delete-button collection="bugs" :id="bug.id"></delete-button>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import appListItem from "~/components/pages/bug/app-list-item";
import editButton from "~/components/ui/edit-button";
import deleteButton from "~/components/ui/delete-button";

export default {
  components: { appListItem, editButton, deleteButton },
  props: ["bug"],
};
</script>

<style scoped>
.v-list-item__content {
  padding: 2px 0px;
}
</style>

