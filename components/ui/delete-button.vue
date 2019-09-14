<template>
  <v-btn small color="error" @click="remove" v-show="$read('nav', 'edit')">
    <v-icon left>mdi-delete</v-icon>削除
  </v-btn>
</template>

<script>
export default {
  props: ["collection", "id"],
  methods: {
    remove() {
      this.$store.dispatch(`${this.collection}/remove`, this.id);
    },
  },
};
</script>
