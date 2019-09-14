<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-layout>
        <v-flex xs4>{{ account.name }}</v-flex>
        <v-flex xs4>{{ account.user }}</v-flex>
        <v-flex xs4>{{ account.timestamp | date }}</v-flex>
      </v-layout>
    </v-list-item-title>
    <v-list-item-subtitle>
      <v-layout>
        <v-flex xs4>{{ account.kind }}{{ account.num }}</v-flex>
        <v-flex xs4>
          <moneta-bank-name :id="account.bankId" />
        </v-flex>
        <v-flex xs4>
          <moneta-branch-name :id="account.branchId" />
        </v-flex>
      </v-layout>
    </v-list-item-subtitle>
    <v-list-item-subtitle>
      <v-layout>
        <v-flex xs4>{{ account.total | yen }}</v-flex>
        <v-flex xs8>{{ account.password }}</v-flex>
      </v-layout>
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
export default {
  props: ["account"],
};
</script>
