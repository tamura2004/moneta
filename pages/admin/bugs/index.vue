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
      <app-list
        v-for="bug in bugs(query, progress, account)"
        :bug="bug"
        :key="bug.id"
        @delete="remove(bug.id)"
      ></app-list>
      <list-actions collection="bugs"></list-actions>
    </v-card>
    <v-pagination v-model="page" class="mt-4" :length="totalPage"/>
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
    ...mapGetters("bugs", ["bugs"]),
    ...mapGetters("nav/edit", ["edit"]),
    ...mapGetters("nav/query", ["query"]),
    ...mapGetters("accounts", ["account"]),
    totalPage() {
      return Math.ceil(this.statements.length / this.PER_PAGE);
    },
    lists() {
      return this.statements.slice(
        (this.page - 1) * this.PER_PAGE,
        this.page * this.PER_PAGE,
      );
    },
  },
  methods: mapActions("bugs", ["remove"]),
  methods: mapActions("nav/edit", ["toggle"]),
  name: "PageStatements",
  mounted() {
    this.page = this.totalPage;
  },
};
</script>
