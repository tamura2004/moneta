<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-row>
        <v-col cols="1" :class="`${bug.impactRate}--text`">■</v-col>
        <v-col cols="11">{{ bug && bug.name }}</v-col>
      </v-row>
    </v-list-item-title>
    <v-list-item-subtitle>
      <v-row>
        <v-col>報告：{{ bug && account(bug.reporter) | name }}</v-col>
        <v-col>{{ bug && bug.reportDate }}</v-col>
        <v-col>初期：{{ bug && account(bug.interimRecoverer) | name }}</v-col>
        <v-col>{{ bug && bug.interimRecoverDate }}</v-col>
      </v-row>
    </v-list-item-subtitle>
    <v-list-item-subtitle>
      <v-row>
        <v-col>調査：{{ bug && account(bug.inspector) | name }}</v-col>
        <v-col>{{ bug && bug.inspectDate }}</v-col>
        <v-col>対応：{{ bug && account(bug.fullRecoverer) | name }}</v-col>
        <v-col>{{ bug && bug.completeDate }}</v-col>
      </v-row>
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["bug"],
  computed: mapGetters("accounts", ["account"]),
};
</script>
