<template>
  <h1>振込金を入金しています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    let { accountId, amount, total } = this.$transfer
    total -= amount;

    this.$write("accounts", {
      id: accountId,
      data: { total },
    });

    this.$write("statements", {
      accountId,
      amount,
      total,
      kind: "入金",
      memo: `振込元：${this.$session.account.name}`,
    });

    this.$router.push("/statements");
  },
};
</script>