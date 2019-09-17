<template>
  <h1>振込金を入金しています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    const amount = this.$transfer.amount;
    const total = this.$transfer.total + this.$transfer.amount;

    this.$write("accounts", {
      id: this.$transfer.accountId,
      data: { total },
    });

    this.$write("statements", {
      accountId: this.$transfer.accountId,
      amount,
      total,
      kind: "入金",
      memo: `振込元：${this.$session.account.name}`,
    });

    this.$router.push("/statements");
  },
};
</script>