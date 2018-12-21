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
        )
        p.red--text(v-if="error") 口座を選択して下さい
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="select") 選択
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';

@Component
export default class AccountSelectCard extends Vue {
  private accountId: number = 0;
  private error: boolean = false;

  private select(): void {
    if (this.accountId === 0) {
      this.error = true;
    } else {
      const account: Account | undefined = this.accounts.find((b: Account) => b.id === this.accountId);
      if (account === undefined) {
        this.error = true;
      } else {
        this.$store.commit('setAccountTo', account);
      }
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
