<template>
  <v-list-item-content>
    <v-list-item-title>
      <v-row>
        <v-col cols="1" :class="`${bug.category}--text`">#{{ bug.id.substr(0, 4) }}</v-col>
        <v-col cols="2" :class="`${bug.category}--text`">■{{ category }}</v-col>
        <v-col cols="9">{{ bug && bug.name }}</v-col>
      </v-row>
    </v-list-item-title>
    <v-list-item-subtitle>
      <v-list-item-title>
        <v-row>
          <v-col>報:<span class="font-weight-bold">{{ account(bug.reportUser) | name }}</span> / {{ bug.reportDate || "----" }}</v-col>
          <v-col>設:<span class="font-weight-bold">{{ account(bug.designUser) | name }}</span> / {{ bug.designDate || "----" }}</v-col>
          <v-col>開:<span class="font-weight-bold">{{ account(bug.developUser) | name }}</span> / {{ bug.developDate || "----" }}</v-col>
          <v-col>検:<span class="font-weight-bold">{{ account(bug.testUser) | name }}</span> / {{ bug.testDate || "----" }}</v-col>
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

<style scoped>
.col {
  padding: 1px 16px;
}
</style>
