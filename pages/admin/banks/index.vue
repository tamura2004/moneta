<template>
  <v-data-table
    v-model="rows"
    @click:row="edit($event)"
    :headers="$read('data/banks/headers')"
    :items="$read('banks')"
    :items-per-page="5"
    show-select
    class="elevation-2"
  >
    <template #top>
      <v-toolbar flat dense>
        <v-toolbar-title>銀行一覧</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon to="/admin/banks/new">
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
    </template>
  </v-data-table>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    edit(row) {
      this.$router.push(`/admin/banks/${row.id}/edit`);
    },
  },
};
</script>
