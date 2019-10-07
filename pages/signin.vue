<template>
  <v-card class="elevation-12 mt-8">
    <v-toolbar dark color="primary">
      <v-toolbar-title>口座開設</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="$nav.valid">
        <v-select label="銀行" v-model="$signin.bankId" :items="$read('banks')" />
        <v-select
          label="支店"
          v-model="$signin.branchId"
          :items="$read('branches', { bankId: $signin.bankId })"
        />
        <v-text-field label="ユーザーＩＤ" v-model="$signin.user" type="text" />
        <v-text-field label="お名前" v-model="$signin.name" type="text" />
        <v-text-field
          label="パスワード"
          type="password"
          v-model="$signin.password"
          :rules="passwordRules"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="signin" :disabled="!$nav.valid">口座開設</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  layout: "login",
  computed: {
    passwordRules() {
      return [
        v => (v && v.length > 4) || "パスワードは4文字以上です",
        v => /[0-9]/.test(v) || "パスワードは1文字以上数字を含みます",
      ];
    },
  },
  methods: {
    async signin() {
      const account = this.$createAccount();

      this.$write("accounts", account);
      this.$session.account = account;
      this.$router.push("/");
    },
  },
};
</script>
