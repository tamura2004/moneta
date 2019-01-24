<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 口座を選択して下さい
    v-card-text
      v-form
        v-select(
          prepend-icon="money"
          :items="accounts"
          :item-text="accountName"
          item-value="id"
          v-model="accountId"
          @input="select"
        )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';

@Component
export default class AccountSelectCard extends Vue {
  private accountId: string = '';

  private select(): void {
    const account: Account | undefined = this.accounts.find((b: Account) => b.id === this.accountId);
    if (account === undefined) {
      throw new Error(`bad account id: ${this.accountId}`);
    } else {
      this.$store.commit('setAccountTo', account);
    }
  }
  private accountName(account: Account): string {
    return (account.name + ' ' + account.kind + ' ' + account.num);
  }
  get accounts(): Account[] {
    return this.$store.getters.accountsTo;
  }
}
</script>

<style lang="stylus">
</style>
