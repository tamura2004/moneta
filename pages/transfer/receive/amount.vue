<template>
  <h1>振込金を入金しています</h1>
</template>

<script>
export default {
  layout: "login",
  created() {
    let { accountId, amount } = this.$transfer;
    const account = this.$read("accounts", accountId);

    this.$write("accounts", {
      ...account,
      total: account.total + amount
    });

    this.$write("statements", {
      accountId,
      amount,
      total: account.total + amount,
      kind: "入金",
      memo: `振込元：${ this.$session.account.name }`,
    });

    this.$router.push("/statements");
  },
};
</script>