<template>
  <v-card class="elevation-12 mt-8">
    <v-toolbar dark color="primary">
      <v-toolbar-title>口座開設</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid">
        <v-select label="銀行" v-model="bankId" :items="banks" />
        <v-select label="支店" v-model="branchId" :items="branchItems" />
        <v-text-field label="ユーザーＩＤ" v-model="user" type="text" />
        <v-text-field label="お名前" v-model="name" type="text" />
        <v-text-field label="パスワード" v-model="password" type="password" :rules="passwordRules" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="signin" :disabled="!valid">口座開設</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";
import { mapItems } from "~/plugins/mapItems";

export default {
  layout: "login",
  computed: {
    passwordRules() {
      return [
        v => (v && v.length > 4) || "パスワードは4文字以上です",
        v => /[0-9]/.test(v) || "パスワードは1文字以上数字を含みます",
      ];
    },
    ...mapAccessors("form/signin", [
      "valid",
      "bankId",
      "branchId",
      "user",
      "name",
      "password",
      "account",
      "statement",
    ]),
    ...mapItems(["banks", "branches"]),
    branchItems() {
      return this.branches.filter(v => v.bankId === this.bankId);
    },
  },
  methods: {
    signin() {
      this.$store.dispatch("signin/signin");
      this.$router.push("/");
    },
  },
};
</script>
