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
import Item from '@/models/Item';
import { mapState } from 'vuex';

@Component
export default class BranchSelectCard extends Vue {
  private branchId: string = '';

  private input(): void {
    this.$store.commit('transfer/branchId', this.branchId);
    this.$router.push('/transfer/account');
  }

  private get bankId(): string | undefined {
    return this.$store.state.transfer.bankId;
  }

  private get branches(): Item[] {
    return Item.branches(this.$store.state, this.bankId);
  }
}
</script>

<style lang="stylus">
</style>
