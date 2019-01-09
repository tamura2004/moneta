<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 金額をご入力下さい
    v-card-text
      v-form(v-model="valid")
        v-text-field(
          prepend-icon="money"
          name="金額"
          label="金額 "
          type="number"
          v-model="amount"
          :rules="amountRules"
          requied
        )
        p.red--text(v-if="error !== null") {{ error }}
    v-card-actions
      v-spacer
      //- v-btn(color="warning" @click="back") 戻る
      v-btn(color="primary" @click="exec" :disabled="!valid") 振込実行
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import API from '@/services/API';

@Component
export default class InputAmount extends Vue {
  private amount: string = '';
  private error: null | string = null;
  private valid: boolean = false;

  private amountRules = [
    (v: number) => v <= Number(this.$store.state.account.balance) || '残高が不足しています',
    // (v: number) => v === 0 || '振込金額を指定して下さい',
    // (v: number) => v < 0 || '振込金額はマイナスを指定できません',
  ];

  // private back(): void {
  //   this.$store.commit('newTransfer');
  // }

  private exec(): void {
    if (!this.valid) {
      throw new Error(`bad amount: ${this.amount}`);
    } else {
      const idFrom = this.$store.state.account.id;
      const idTo = this.$store.state.transfer.accountTo.id;
      API.get(`accounts/${idFrom}/account_to/${idTo}/amount/${this.amount}/transfer`).then((res) => {
        this.$router.push('/statements');
      });
    }
  }
}
</script>

<style lang="stylus">
</style>
