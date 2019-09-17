<template>
  <h1>手数料を引き落としています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    let { id, total } = this.$session.account;
    const fee = this.$transfer.amount < 30000 ? 210 : 432;
    total -= fee;

    this.$write("accounts", {
      id,
      data: { total },
    });

    this.$write("statements", {
      accountId: id,
      amount: fee,
      total,
      kind: "出金",
      memo: "振込手数料",
    });

    this.$router.push("/transfer/pay/amount");
  },
};
</script>