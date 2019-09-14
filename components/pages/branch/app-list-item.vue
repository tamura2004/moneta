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
        <v-flex xs4>
          <moneta-bank-name :id="branch.bankId" />
        </v-flex>
      </v-layout>
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
export default {
  props: ["branch"],
};
</script>
