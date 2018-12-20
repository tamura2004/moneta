<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 金額をご入力下さい
    v-card-text
      v-form
        v-text-field(
          prepend-icon="money"
          name="金額"
          label="金額 "
          type="number"
          v-model="amount"
        )
        p.red--text(v-if="error") 残高が不足しています
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="exec" :disabled="empty") 振込実行
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import API from '@/services/API';

@Component
export default class InputAmount extends Vue {
  private amount: string = '';
  private error: boolean = false;

  private exec(): void {
    if (Number(this.amount) > Number(this.$store.state.account.balance)) {
      this.error = true;
    } else {
      const idFrom = this.$store.state.account.id;
      const idTo = this.$store.state.transfer.accountTo.id;
      API.get(`accounts/${idFrom}/account_to/${idTo}/amount/${this.amount}/transfer`).then((res) => {
        this.$router.push('/statements');
      });
    }
  }
  get empty(): boolean {
    return this.amount === '';
  }
}
</script>

<style lang="stylus">
</style>
