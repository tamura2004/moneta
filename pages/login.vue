<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>ログイン</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <code v-if="debug">{{ {valid, id, user, hashedPassword} }}</code>
      <v-form v-model="valid">
        <v-select
          v-model="id"
          label="お名前"
          item-text="name"
          item-value="id"
          :items="accounts"
          :rules="rules"
        />
        <v-text-field v-model="user" label="ユーザーID"></v-text-field>
        <v-text-field v-model="password" label="パスワード"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn nuxt to="/signin" color="success">口座開設</v-btn>
      <v-btn :disabled="!valid" @click.stop="login()" color="primary">ログイン</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import md5 from "blueimp-md5";

export default {
  layout: "login",
  data: () => ({
    debug: false,
    valid: false,
    id: null,
    user: null,
    password: null,
    rules: [
      v => !!v || "必須項目です",
      // memo: 複数のルールを並べることができる。
    ],
  }),
  computed: {
    accounts() {
      return this.$store.getters["accounts/accounts"]("ALL");
    },
    hashedPassword() {
      return md5(this.password);
    },
    account() {
      return this.accounts.find(a => a.user === this.user);
    },
  },
  methods: {
    login() {
      this.$store.dispatch("login/id", this.id);
      this.$router.push("/");
    },
  },
};
</script>
