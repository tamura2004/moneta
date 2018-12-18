<template lang="pug">
  div
    v-list.elevation-12.mb-4
      v-subheader 振込元
      v-list-tile
        v-list-tile-avatar 口座
        v-list-tile-content 普通 1098765
      v-list-tile
        v-list-tile-avatar 残高
        v-list-tile-content {{ $store.getters.balance }}
    v-card.elevation-12.mt-2
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
import TransferCard from '@/components/LeafPageToolbar.vue';
import Bank from '@/models/Bank';

@Component({
  components: {
    TransferCard,
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
