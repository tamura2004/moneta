<template>
  <h1>振込金を引き落としています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    const account = this.$session.account;
    const amount = this.$transfer.amount;

    this.$write("accounts", {
      ...account,
      total: account.total - amount,
    });

    this.$write("statements", {
      accountId: account.id,
      amount,
      total: account.total - amount,
      kind: "出金",
      memo: `振込先：${ this.$transfer.account.name }`,
    });

    this.$router.push("/transfer/receive/amount");
  },
};
</script>