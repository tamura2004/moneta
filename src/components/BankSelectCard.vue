<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 振込先銀行を選択して下さい
    v-card-text
      v-form
        BankSelect(v-model="bankId")
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="select") 選択
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Bank } from '@/models/Bank';
import BankSelect from '@/components/BankSelect.vue';

@Component({
  components: {
    BankSelect,
  },
})
export default class BankSelectCard extends Vue {
  private bankId: number = 0;
  private error: boolean = false;

  private select(): void {
    if (this.bankId === undefined) {
      this.error = true;
    } else {
      const bank: Bank | undefined = this.banks.find((b) => b.id === this.bankId);
      if (bank === undefined) {
        this.error = true;
      } else {
        this.$store.commit('setBankTo', bank);
      }
    }
  }
  get banks(): Bank[] {
    return this.$store.state.banks;
  }
}
</script>

<style lang="stylus">
</style>
