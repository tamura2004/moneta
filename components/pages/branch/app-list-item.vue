<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-layout>
        <v-flex xs4>{{ branch.timestamp | date }}</v-flex>
        <v-flex xs4>{{ branch.name }}</v-flex>
        <v-flex xs4>{{ branch.num }}</v-flex>
      </v-layout>
    </v-list-item-title>
    <v-list-item-subtitle>
      <v-layout>
        <v-flex xs4>{{ bank(branch.bankId) | name }}</v-flex>
      </v-layout>
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["branch"],
  computed: mapGetters("banks", ["bank"]),
};
</script>
