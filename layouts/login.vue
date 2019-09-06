<template>
  <v-app>
    <v-content>
      <div id="p5"></div>
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
import p5 from "~/middleware/p5";
import game from "~/middleware/game";

export default {
  mounted() {
    this.$route.query.game ? game() : p5();
  },
};
</script>
