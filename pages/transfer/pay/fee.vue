<template>
  <h1>手数料を引き落としています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    const account = this.$session.account;
    const fee = this.$transfer.amount < 30000 ? 210 : 432;

    this.$write("accounts", {
      ...account,
      total: account.total - fee,
    });

    this.$write("statements", {
      accountId: account.id,
      amount: fee,
      total: account.total - fee,
      kind: "出金",
      memo: "振込手数料",
    });

    this.$router.push("/transfer/pay/amount");
  },
};
</script>