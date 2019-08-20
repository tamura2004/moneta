<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon>
        <nuxt-link to="/" tag="div">
          <v-icon>mdi-home</v-icon>
        </nuxt-link>
      </v-app-bar-nav-icon>
      <v-toolbar-title>管理者画面</v-toolbar-title>
      <v-toolbar-items>
        <v-btn text to="/admin/banks">銀行</v-btn>
        <v-btn text to="/admin/branches">支店</v-btn>
        <v-btn text to="/admin/bugs">障害</v-btn>
      </v-toolbar-items>

    </v-app-bar>
    <v-content>
      <v-container fluid>
        <v-layout align-start justify-center>
          <v-flex xs12 sm12 md8 xl8>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("login", ["account", "branch", "bank"]),
  },
};
</script>
