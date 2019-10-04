<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-row no-gutters>
        <v-col sm="4" cols="4">{{ bank.num }}</v-col>
        <v-col sm="4" cols="8">{{ bank.name }}</v-col>
        <v-col sm="4" cols="12">{{ bank.timestamp | date }}</v-col>
      </v-row>
    </v-list-item-title>
  </v-list-item-content>
</template>

<script>
export default {
  props: ["bank"],
};
</script>
