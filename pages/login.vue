<template>
  <v-card class="elevation-12 mt-8">
    <v-toolbar dark color="primary">
      <v-toolbar-title>ログイン</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select
          item-text="name"
          item-value="id"
          :items="accounts('ALL')"
          :value="id"
          @input="$store.dispatch('login/id', $event)"
        ></v-select>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn nuxt to="/signin" color="success">口座開設</v-btn>
      <v-btn
        nuxt
        to="/"
        color="primary"
      >ログイン</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: 'login',
  computed: {
    ...mapGetters('accounts', ['accounts']),
    ...mapGetters('login', ['id']),
  },
}
</script>
