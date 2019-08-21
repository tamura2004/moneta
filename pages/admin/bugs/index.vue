<template>
  <div>
    <v-card>
      <list-toolbar title="不備・障害一覧"></list-toolbar>
      <v-divider></v-divider>
      <v-tabs>
        <v-tab @click="rate=null">すべて</v-tab>
        <v-tab @click="rate='error'">重大</v-tab>
        <v-tab @click="rate='warning'">軽微</v-tab>
        <v-tab @click="rate='primary'">改善</v-tab>
        <v-tab @click="rate='success'">追加</v-tab>
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
    rate: null,
  }),
  computed: {
    allBugs() {
      if (this.rate === null) {
        return this.bugs;
      } else {
        return this.bugs.filter(bug => bug.impactRate === this.rate);
      }
    },
    ...mapGetters("bugs", ["bugs"]),
    ...mapGetters("nav/edit", ["edit"]),
  },
  methods: mapActions("bugs", ["remove"]),
  methods: mapActions("nav/edit", ["toggle"]),
};
</script>
