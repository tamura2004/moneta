<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-row>
        <v-col cols="2" :class="`${bug.category}--text`">■{{ category }}</v-col>
        <v-col cols="10">{{ bug && bug.name }}</v-col>
      </v-row>
    </v-list-item-title>
    <v-list-item-subtitle>
      <v-row>
        <v-col>報告</v-col>
        <v-col>設計</v-col>
        <v-col>開発</v-col>
        <v-col>検証</v-col>
      </v-row>
      <v-list-item-title>
        <v-row>
          <v-col>{{ account(bug.reportUser) | name }} / {{ bug.reportDate || "----" }}</v-col>
          <v-col>{{ account(bug.designUser) | name }} / {{ bug.designDate || "----" }}</v-col>
          <v-col>{{ account(bug.developUser) | name }} / {{ bug.developDate || "----" }}</v-col>
          <v-col>{{ account(bug.testUser) | name }} / {{ bug.testDate || "----" }}</v-col>
        </v-row>
      </v-list-item-title>
    </v-list-item-subtitle>
  </v-list-item-content>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["bug"],
  computed: {
    category() {
      const dic = {
        error: "バグ",
        warning: "リファクタリング",
        primary: "操作性改善",
        success: "機能追加",
      };
      return dic[this.bug.category];
    },
    ...mapGetters("accounts", ["account"]),
  },
};
</script>
