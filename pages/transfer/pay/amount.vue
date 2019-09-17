<template>
  <h1>振込金を引き落としています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    let { id, total, name } = this.$session.account;
    const amount = this.$transfer.amount;
    total -= amount;

    this.$write("accounts", {
      id,
      data: { total },
    });

    this.$write("statements", {
      accountId: id,
      amount,
      total,
      kind: "出金",
      memo: `振込先：${name}`,
    });

    this.$router.push("/transfer/receive/amount");
  },
};
</script>