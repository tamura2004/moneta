<template>
  <v-btn
    small
    color="light"
    :to="`/admin/${collection}/${id}/edit`"
    :disabled="!edit"
    @click="toggle"
  >
    <v-icon left>mdi-pencil</v-icon>編集
  </v-btn>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["collection", "id"],
  computed: mapGetters("nav/edit", ["edit"]),
  methods: mapActions("nav/edit", ["toggle"]),
};
</script>
