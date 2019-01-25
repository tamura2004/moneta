<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 口座を選択して下さい
    v-card-text
      v-form
        v-select(
          prepend-icon="person"
          :items="accounts"
          label="口座"
          :item-text="itemText"
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

  get accounts(): Account[] {
    return this.$store.getters.accountsTo;
  }
  private itemText(account: Account): string {
    return (account.name + ' ' + account.kind + ' ' + account.num);
  }
  private select(): void {
    this.$store.commit('setAccountTo', this.accountId);
  }
}
</script>

<style lang="stylus">
</style>
