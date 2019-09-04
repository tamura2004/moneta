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
      <app-list v-for="bug in pageList" :bug="bug" :key="bug.id" @delete="remove(bug.id)"></app-list>
      <list-actions collection="bugs"></list-actions>
      <v-btn color="success" @click="download">download</v-btn>
    </v-card>
    <v-pagination class="mt-4" v-model="page" :length="totalPage"></v-pagination>
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
    page: 1,
    PER_PAGE: 5,
  }),
  computed: {
    ...mapGetters("bugs", ["bugs", "collection"]),
    ...mapGetters("nav/edit", ["edit"]),
    ...mapGetters("nav/query", ["query"]),
    ...mapGetters("accounts", ["account"]),
    filteredList() {
      return this.bugs(this.query, this.progress, this.account).sort(
        (a, b) => a.num - b.num,
      );
    },
    pageList() {
      return this.filteredList.slice(
        (this.page - 1) * this.PER_PAGE,
        this.page * this.PER_PAGE,
      );
    },
    totalPage() {
      return Math.ceil(this.filteredList.length / this.PER_PAGE);
    },
  },
  methods: {
    ...mapActions("bugs", ["remove"]),
    ...mapActions("nav/edit", ["toggle"]),
    download() {
      let csv = "\ufeffid,name,category,reportUser,reportDate,report\n";
      for (const bug of this.collection) {
        csv += `${bug.id},${bug.name},${bug.category},${bug.reportUser},${bug.reportDate},${bug.reportDescription && bug.reportDescription.replace("\n","。")}\n`;
      }
      const blob = new Blob([csv], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "bugs.csv";
      link.click();
    },
  },
};
</script>
