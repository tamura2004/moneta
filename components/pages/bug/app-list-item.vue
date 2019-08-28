<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-row>
        <v-col cols="1">{{ bugId }}</v-col>
        <v-col cols="2">{{ category }}</v-col>
        <v-col cols="9">{{ bug && bug.name }}</v-col>
      </v-row>
    </v-list-item-title>
    <v-list-item-subtitle>
      <v-list-item-title>
        <v-row>
          <v-col>報:{{ account(bug.reportUser) | name }} / {{ bug.reportDate || "----" }}</v-col>
          <v-col>設:{{ account(bug.designUser) | name }} / {{ bug.designDate || "----" }}</v-col>
          <v-col>開:{{ account(bug.developUser) | name }} / {{ bug.developDate || "----" }}</v-col>
          <v-col>検:{{ account(bug.testUser) | name }} / {{ bug.testDate || "----" }}</v-col>
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
    bugId() {
      return ("0000" + this.bug.num).slice(-4)
    },
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

<style scoped>
.col {
  padding: 4px 16px;
}
</style>
