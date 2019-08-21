<template>
  <div>
    <v-card>
      <list-toolbar title="不備・障害一覧"></list-toolbar>
      <v-divider></v-divider>
      <v-tabs>
        <v-tab @click="progress=null">すべて</v-tab>
        <v-tab @click="progress='report'">報告済</v-tab>
        <v-tab @click="progress='design'">設計済</v-tab>
        <v-tab @click="progress='develop'">開発済</v-tab>
        <v-tab @click="progress='test'">検証済</v-tab>
      </v-tabs>
      <v-divider></v-divider>
      <app-list v-for="bug in allBugs" :bug="bug" :key="bug.id" @delete="remove(bug.id)"></app-list>
      <list-actions collection="bugs"></list-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appList from "~/components/pages/bug/app-list";
import listToolbar from "~/components/ui/list-toolbar";
import listActions from "~/components/ui/list-actions";

export default {
  layout: "admin",
  components: { appList, listToolbar, listActions },
  data: () => ({
    progress: null,
  }),
  computed: {
    allBugs() {
      if (this.progress === null) {
        return this.bugs;
      } else if (this.progress === "report") {
        return this.bugs.filter(bug => bug.reportDate !== null && bug.designDate === null);
      } else if (this.progress === "design") {
        return this.bugs.filter(bug => bug.designDate !== null && bug.developDate === null);
      } else if (this.progress === "develop") {
        return this.bugs.filter(bug => bug.developDate !== null && bug.testDate === null);
      } else if (this.progress === "test") {
        return this.bugs.filter(bug => bug.testDate !== null);
      }
    },
    ...mapGetters("bugs", ["bugs"]),
    ...mapGetters("nav/edit", ["edit"]),
  },
  methods: mapActions("bugs", ["remove"]),
  methods: mapActions("nav/edit", ["toggle"]),
};
</script>
