<template>
  <v-card-actions class="pa-4">
    <v-btn small color="primary" :to="`/admin/${collection}/new`" :disabled="!$read('nav', 'edit')">
      <v-icon left>mdi-plus</v-icon>追加
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  props: ["collection"],
};
</script>
