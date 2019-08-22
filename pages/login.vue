<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>ログイン</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select
          label="お名前"
          item-text="name"
          item-value="id"
          :items="accounts('ALL')"
          :value="id"
          @input="$store.dispatch('login/id', $event)"
        />
        <v-text-field label="ユーザーID"></v-text-field>
        <v-text-field type="password" label="パスワード"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn nuxt to="/signin" color="success">
        口座開設
      </v-btn>
      <v-btn nuxt to="/" color="primary">
        ログイン
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "login",
  computed: {
    ...mapGetters("accounts", ["accounts"]),
    ...mapGetters("login", ["id"]),
  },
};
</script>
