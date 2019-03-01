<template lang="pug">
  v-list.elevation-6
    v-subheader.header  振込元
    v-list-tile
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs6) {{ account && account.bankName }}
            v-flex(xs6) {{ account && account.branchName }}
        v-list-tile-title
          v-layout
            v-flex(xs2) {{ account && account.kind }}
            v-flex(xs4) {{ account && account.num }}
            v-flex(xs2) 残高
            v-flex(xs4) {{ account && account.total | threeDigitedYen }}
    v-divider
    v-subheader.header  振込先
    v-list-tile
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs6) {{ transfer.bankTo && transfer.bankTo.name }}
            v-flex(xs6) {{ transfer.branchTo && transfer.branchTo.name }}
        v-list-tile-title
          v-layout
            v-flex(xs2) {{ transfer.accountTo && transfer.accountTo.kind }}
            v-flex(xs4) {{ transfer.accountTo && transfer.accountTo.num }}
            v-flex(xs6) {{ transfer.accountTo && transfer.accountTo.name }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Account from '@/models/Account';
import TransferState from '@/store/TransferState';
import { DB } from '@/plugins/firebase';

@Component
export default class TransferInfo extends Vue {
  private get transfer(): TransferState {
    return this.$store.state.transfer;
  }
  private get account(): Account | undefined {
    return this.$store.getters.account;
  }
}
</script>

<style lang="stylus">
  .header
    height 36px
</style>
