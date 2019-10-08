<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>ログイン</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="$nav.valid">
        <v-select label="お名前" v-model="$login.id" :items="$read('accounts')" :rules="rules" />
        <v-text-field label="パスワード" v-model="$login.password" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn nuxt to="/signin" color="success">口座開設</v-btn>
      <v-btn :disabled="!$nav.valid" @click="login" color="primary">ログイン</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import md5 from "blueimp-md5";

export default {
  layout: "login",
  computed: {
    rules() {
      return [v => !!v || "必須項目です"];
    },
  },
  methods: {
    login() {
      const account = this.$read("accounts", this.$login.id);

      this.$session.id = this.$login.id;
      this.$session.account = account;
      this.$router.push("/");
    },
  },
};
</script>
