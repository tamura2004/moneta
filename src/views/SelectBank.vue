<template lang="pug">
  LeafPageToolbar
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
          )
          p.red--text(v-if="error") 銀行を選択して下さい
      v-card-actions
        v-spacer
        v-btn(color="primary" @click="select") 選択
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LeafPageToolbar from '@/components/LeafPageToolbar.vue';
import Bank from '@/models/Bank';

@Component({
  components: {
    LeafPageToolbar,
  },
})
export default class SelectBank extends Vue {
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
        this.$router.push('/selectBranch');
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
