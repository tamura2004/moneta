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
export default {
  data: () => ({
    menues: [
      { icon: "mdi-account", to: "/login?game=1", name: "ログイン画面" },
      { icon: "mdi-bank", to: "/admin/banks", name: "銀行" },
      { icon: "mdi-city", to: "/admin/branches", name: "支店" },
      { icon: "mdi-account-card-details", to: "/admin/accounts", name: "口座" },
    ],
  }),
  computed: {
    drawer() {
      return this.$store.getters["nav/drawer"];
    }
  },
};
</script>
