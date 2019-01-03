<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 振込先銀行を選択して下さい
    v-card-text
      v-form
        v-select(
          prepend-icon="account_balance"
          :items="banks"
          item-text="name"
          item-value="id"
          v-model="bankId"
          @input="select"
        )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Bank } from '@/models/Bank';

@Component
export default class BankSelectCard extends Vue {
  private bankId: number = 0;

  private select(): void {
    const bank: Bank | undefined = this.banks.find((b) => b.id === this.bankId);

    if (bank === undefined) {
      throw new Error(`bad bank id: ${this.bankId}`);
    } else {
      this.$store.commit('setBankTo', bank);
    }
  }
  get banks(): Bank[] {
    return this.$store.state.banks;
  }
}
</script>

<style lang="stylus">
</style>
