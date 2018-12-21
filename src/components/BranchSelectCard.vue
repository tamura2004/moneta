<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 支店を選択して下さい
    v-card-text
      v-form
        v-select(
          prepend-icon="account_balance"
          :items="branches"
          item-text="name"
          item-value="id"
          v-model="branchId"
        )
        p.red--text(v-if="error") 支店を選択して下さい
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="select") 選択
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';

@Component
export default class BranchSelectCard extends Vue {
  private branchId: number = 0;
  private error: boolean = false;

  private select(): void {
    if (this.branchId === undefined) {
      this.error = true;
    } else {
      const branch: Branch | undefined = this.branches.find((b: Branch) => b.id === this.branchId);
      if (branch === undefined) {
        this.error = true;
      } else {
        this.$store.commit('setBranchTo', branch);
      }
    }
  }
  get branches(): Branch[] {
    return this.$store.getters.branchesTo;
  }
}
</script>

<style lang="stylus">
</style>
