<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 振込先銀行を選択して下さい
    v-card-text
      v-form
        v-select(
          prepend-icon="business"
          :items="banks"
          label="銀行"
          item-text="name"
          item-value="id"
          v-model="bankId"
          @input="input"
        )
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Bank from '@/models/Bank';
import Item from '@/models/Item';

@Component
export default class BankSelectCard extends Vue {
  private bankId: string = '';

  private input(): void {
    this.$store.commit('transfer/bankId', this.bankId);
    this.$router.push('/transfer/branch');
  }

  private get banks(): Item[] {
    return Item.banks(this.$store.state);
  }
}
</script>

<style lang="stylus">
</style>
