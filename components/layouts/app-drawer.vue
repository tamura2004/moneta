<template>
  <v-navigation-drawer app clipped :value="drawer">
    <v-list dense>
      <v-list-item v-for="menu in menues" :key="menu.name" :to="menu.to">
        <v-list-item-action>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ menu.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    menues: [
      { icon: "mdi-account", to: "/login", name: "ログイン画面" },
      { icon: "mdi-bank", to: "/admin/banks", name: "銀行" },
      { icon: "mdi-city", to: "/admin/branches", name: "支店" },
      { icon: "mdi-bug", to: "/admin/bugs", name: "障害" },
    ],
  }),
  computed: mapGetters("nav/drawer", ["drawer"]),
};
</script>
