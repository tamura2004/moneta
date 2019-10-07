<template>
  <v-toolbar flat dense>
    <v-toolbar-title>{{ label }}</v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-btn icon @click="remove">
      <v-icon>mdi-delete-circle</v-icon>
    </v-btn>
    <v-btn icon :to="`/admin/${collection}/new`">
      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: ["label", "collection", "rows"],
  methods: {
    remove() {
      for (const row of this.rows) {
        this.$store.dispatch(`${this.collection}/remove`, row.id);
      }
    },
  },
};
</script>