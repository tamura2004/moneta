<template>
  <v-btn small color="light" :to="`/admin/${collection}/${id}/edit`" v-show="$nav.edit">
    <v-icon left>mdi-pencil</v-icon>編集
  </v-btn>
</template>

<script>
export default {
  props: ["collection", "id"],
};
</script>
