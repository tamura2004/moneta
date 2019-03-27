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
    v-card-actions
      v-spacer
      //- v-btn(color="warning" @click="$router.push('/transfer/account')") 戻る
      v-btn(color="primary" @click="exec" :disabled="!valid") 振込実行
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Account from '@/models/Account';
import API from '@/services/API';
import { mapGetters } from 'vuex';

function checknumber(x: number) {
    return Math.trunc(x) === x;
}

@Component
export default class TransferAmountInput extends Vue {
  private amount: string = '';
  private error: null | string = null;
  private valid: boolean = false;

  private get account(): Account {
    return this.$store.getters['session/account'];
  }

  private amountRules = [
    (v: string) => v !== '' || '金額を入力して下さい',
    (v: string) => Number(v) <= Number(this.account.total) || '残高が不足しています',
    // (v: number) => v > 0 || '振込金額は1円以上の金額を指定して下さい',
    // (v: number) => v > 0 || '不正な数値です。1円以上の金額を指定して下さい',
    // (v: string) => (Number(v) > 0 && checknumber(Number(v))) || '不正な数値です。1円以上の金額を指定して下さい',
];

  private async exec() {
    this.$store.commit('session/processing', true);
    // await new Promise((res) => setTimeout(res, 1000)); // 1 secound sleep for debug
    this.$store.commit('transfer/amount', Number(this.amount));
    await this.$store.dispatch('transfer/exec');
    this.$router.push('/statements');
  }
}
</script>

<style lang="stylus">
</style>
