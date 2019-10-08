<template>
  <h1>口座を作成しています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    // 新規口座情報登録
    const account = this.$createAccount();
    this.$write("accounts", account);

    //　ログイン処理
    this.$session.account = account;

    // 入出金明細作成画面へ
    this.$router.push("/signin/create/statement");
  },
};
</script>