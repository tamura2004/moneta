<template>
  <h1>振込金を引き落としています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    const accountId = this.$read("session", "id");
    const account = this.$read("accounts", accountId);
    const amount = this.$transfer.amount;
    const total = account && account.total - amount;

    this.$write("accounts", {
      id: this.$read("session", "id"),
      data: { total },
    });

    this.$write("statements", {
      accountId,
      amount,
      total,
      kind: "出金",
      memo: `振込先：${this.$transfer.account.name}`,
    });

    this.$router.push("/transfer/receive/amount");
  },
};
</script>