<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 口座を選択して下さい
    v-card-text
      v-form(v-model="valid")
        v-select(
          prepend-icon="person"
          :items="accounts"
          label="口座"
          :item-text="itemText"
          item-value="id"
          v-model="accountId"
          :rules="accountIdRules"
          @input="select"
        )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';
import { Transfer } from '@/models/Transfer';

@Component
export default class AccountSelectCard extends Vue {
  private accountId: string = '';
  private valid: boolean = false;
  private accountIdRules = [
    (v: string) => this.accountId === (this.account && this.account.num) || '振込元と振込先が同一口座です',
  ];

  get accounts(): Account[] {
    return this.$store.getters.accountsTo;
  }
  private itemText(account: Account): string {
    return (account.name + ' ' + account.kind + ' ' + account.num);
  }
  
  private select(): void {
    if(this.valid){
      this.$store.commit('setAccountTo', this.accountId);
    }
  }

  private get account(): Account | undefined {
    return this.$store.getters.account;
  }

}
</script>

<style lang="stylus">
</style>
