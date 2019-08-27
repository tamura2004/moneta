<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-layout>
        <v-flex xs4>{{ account.timestamp | date }}</v-flex>
        <v-flex xs4>{{ account.name }}</v-flex>
        <v-flex xs4>{{ account.num }}</v-flex>
      </v-layout>
    </v-list-item-title>
    <v-list-item-subtitle>
      <v-layout>
        <v-flex xs4>{{ bank(account.bankId) | name }}</v-flex>
        <v-flex xs4>{{ branch(account.branchId) | name }}</v-flex>
      </v-layout>
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["account"],
  computed: mapGetters("banks", ["bank"]),
  computed: mapGetters("branch", ["branch"]),
};
</script>
