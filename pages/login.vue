<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>ログイン</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid">
        <v-select label="お名前" v-model="id" :items="accounts" :rules="rules" />
        <v-text-field label="ユーザーID" v-model="user" />
        <v-text-field label="パスワード" v-model="password" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn nuxt to="/signin" color="success">口座開設</v-btn>
      <v-btn :disabled="!valid" @click="login" color="primary">ログイン</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";
import { mapItems } from "~/plugins/mapItems";
import md5 from "blueimp-md5";

export default {
  layout: "login",
  computed: {
    ...mapItems(["accounts"]),
    ...mapAccessors("form/login", ["valid", "id", "user", "password"]),
    ...mapAccessors("nav", ["loginId"]),
    rules() {
      return [v => !!v || "必須項目です"];
    },
  },
  methods: {
    login() {
      this.loginId = this.id;
      this.$router.push("/");
    },
  },
};
</script>
