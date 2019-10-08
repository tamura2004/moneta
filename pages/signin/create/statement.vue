<template>
  <h1>取引明細を作成しています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    // 口座開設入金明細
    this.$write("statements", {
      accountId: this.$session.account.id,
      kind: "入金",
      amount: 1e7,
      total: 1e7,
      memo: "口座開設",
      timestamp: new Date(),
    });

    // メニュー画面へ
    this.$router.push("/");
  },
};
</script>