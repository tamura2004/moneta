<template>
  <v-app>
    <app-drawer />
    <v-app-bar app dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>管理者画面</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";
import appDrawer from "~/components/layouts/app-drawer";

export default {
  components: {
    appDrawer,
  },
  computed: mapAccessors("nav", ["drawer"]),
};
</script>
