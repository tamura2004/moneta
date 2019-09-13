<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon>
        <nuxt-link to="/" tag="div">
          <v-icon>mdi-bank</v-icon>
        </nuxt-link>
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        <p class="body-1 my-0"><moneta-bank-name /></p>
        <p class="body-1 my-0"><moneta-branch-name /></p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="title" nuxt to="login" text>
          <moneta-account-name />
        </v-btn>
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
import monetaBankName from "~/components/ui/moneta-bank-name";
import monetaBranchName from "~/components/ui/moneta-branch-name";
import monetaAccountName from "~/components/ui/moneta-account-name";

export default {
  components: {
    monetaBankName,
    monetaBranchName,
    monetaAccountName,
  },
};
</script>
