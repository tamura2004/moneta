<template>
  <div>
    <v-card height="380px">
      <v-toolbar color="primary" dark dense>
        <v-toolbar-title>入出金明細</v-toolbar-title>
      </v-toolbar>
      <template v-for="(statement, index) in lists">
        <v-list-item :key="statement.id" two-line>
          <v-list-item-content>
            <v-list-item-title>
              <v-layout>
                <v-flex xs4>
                  {{ statement.timestamp | date }}
                </v-flex>
                <v-flex xs4>
                  {{ statement.memo }}
                </v-flex>
                <v-flex xs4>
                  残高
                </v-flex>
              </v-layout>
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-layout>
                <v-flex xs4>
                  {{ statement.kind }}
                </v-flex>
                <v-flex xs4>
                  {{ statement.amount | yen }}
                </v-flex>
                <v-flex xs4>
                  {{ statement.total | yen }}
                </v-flex>
              </v-layout>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider v-if="index !== PER_PAGE - 1" :key="'div' + statement.id" />
      </template>
    </v-card>
    <v-pagination v-model="page" class="mt-4" :length="totalPage" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageStatements",
  middleware: "login",
  filters: {
    yen: v => (v ? "￥" + v.toLocaleString() + "-" : "----"),
    kind: v => (v && v.kind ? v.kind : "----"),
    date: v =>
      v && v.toDate
        ? v
            .toDate()
            .toISOString()
            .substr(0, 19) // (0, 23) -> show milliseconds
            .replace("T", " ")
        : "----",
  },
  data: () => ({
    page: 1,
    PER_PAGE: 5,
  }),
  computed: {
    ...mapGetters("login", ["statements"]),
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
  mounted() {
    this.page = this.totalPage;
  },
};
</script>
