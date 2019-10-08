<template>
  <v-app>
    <moneta-drawer />
    <v-app-bar app dark clipped-left>
      <v-app-bar-nav-icon @click.stop="$nav.drawer = !$nav.drawer" />
      <v-toolbar-title>管理者画面</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
