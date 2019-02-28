<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 支店を選択して下さい
    v-card-text
      v-form
        v-select(
          prepend-icon="account_balance"
          :items="branches"
          label="支店"
          item-text="name"
          item-value="id"
          v-model="branchId"
          @input="input"
        )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';

@Component
export default class BranchSelectCard extends Vue {
  private branchId: string = '';

  private input(): void {
    this.$store.commit('setBranchTo', this.branchId);
    this.$router.push('/transfer/account');
  }
  get branches(): Branch[] {
    return this.$store.getters.branchesTo;
  }
}
</script>

<style lang="stylus">
</style>
