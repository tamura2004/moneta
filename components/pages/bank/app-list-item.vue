<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-layout>
        <v-flex xs4>{{ bank.timestamp | date }}</v-flex>
        <v-flex xs4>{{ bank.name }}</v-flex>
        <v-flex xs4>{{ bank.num }}</v-flex>
      </v-layout>
    </v-list-item-title>
  </v-list-item-content>
</template>

<script>
export default {
  props: ["bank"],
};
</script>
