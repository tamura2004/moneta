<template>
  <v-data-table
    v-model="rows"
    @click:row="edit($event)"
    :headers="$read(`headers/${collection}`)"
    :items="$read(collection)"
    :items-per-page="5"
    show-select
    class="elevation-2"
  >
    <template #top>
      <moneta-list-toolbar :label="label" :collection="collection" :rows="rows" />
      <v-divider />
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ["collection", "label"],
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    edit(row) {
      this.$router.push(`/admin/${this.collection}/${row.id}/edit`);
    },
  },
};
</script>
