<template lang="pug">
  v-list.elevation-6
    v-subheader.header  振込元
    v-list-tile
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs6) {{ account.bank.name }}
            v-flex(xs6) {{ account.branch.name }}
        v-list-tile-title
          v-layout
            v-flex(xs2) {{ account.kind }}
            v-flex(xs4) {{ account.num }}
            v-flex(xs2) 残高
            v-flex(xs4) {{ account.balanceFormatted }}
    v-divider
    v-subheader.header  振込先
    v-list-tile
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs6) {{ transfer.bankName }}
            v-flex(xs6) {{ transfer.branchName }}
        v-list-tile-title
          v-layout
            v-flex(xs2) {{ transfer.accountKind }}
            v-flex(xs4) {{ transfer.accountNum }}
            v-flex(xs6) {{ transfer.accountName }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Transfer } from '@/models/Transfer';

@Component
export default class TransferCard extends Vue {
  get transfer(): Transfer {
    return this.$store.state.transfer;
  }
  get account(): Account {
    return this.$store.state.account;
  }
}
</script>

<style lang="stylus">
  .header
    height 36px
</style>
