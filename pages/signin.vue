<template>
  <v-card class="elevation-12 mt-8">
    <v-toolbar dark color="primary">
      <v-toolbar-title>口座開設</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select
          label="銀行"
          item-text="name"
          item-value="id"
          :items="banks"
          :value="bankId"
          @input="$store.commit('signin/bankId', $event)"
        />
        <v-select
          label="支店"
          item-text="name"
          item-value="id"
          :items="branches(bankId)"
          :value="branchId"
          @input="$store.commit('signin/branchId', $event)"
        />
        <v-text-field
          label="ユーザーＩＤ"
          type="text"
          :value="user"
          @input="$store.commit('signin/user', $event)"
        />
        <v-text-field
          label="お名前"
          type="text"
          :value="name"
          @input="$store.commit('signin/name', $event)"
        />
        <v-text-field
          label="パスワード"
          :value="password"
          :rules="passwordRules"
          @input="$store.commit('signin/password', $event)"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="signin">口座開設</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "login",
  data: () => ({
    passwordRules: [
      v => v && v.length > 4 || "パスワードは4文字以上です",
      v => /[0-9]/.test(v) || "パスワードは1文字以上数字を含みます",
    ],
  }),
  computed: {
    ...mapGetters("signin", [
      "bankId",
      "branchId",
      "user",
      "name",
      "password",
      "account",
      "statement",
    ]),
    ...mapGetters("banks", ["banks"]),
    ...mapGetters("branches", ["branches"]),
  },
  methods: {
    async signin() {
      await this.$store.dispatch("signin/signin");
      this.$router.push("/");
    },
  },
};
</script>
