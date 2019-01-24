<template lang="pug">
  v-list.elevation-6
    v-subheader.header  振込元
    v-list-tile
      v-list-tile-content
        v-list-tile-title
          v-layout
            v-flex(xs6) {{ bank }}
            v-flex(xs6) {{ branch }}
        v-list-tile-title
          v-layout
            v-flex(xs2) {{ account.kind }}
            v-flex(xs4) {{ account.num }}
            v-flex(xs2) 残高
            v-flex(xs4) {{ account.total | threeDigitedYen }}
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
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';
import { Account } from '@/models/Account';
import { Transfer } from '@/models/Transfer';
import { DB } from '@/plugins/firebase';

@Component
export default class TransferCard extends Vue {
  private bank: string = '';
  private branch: string = '';

  private get transfer(): Transfer {
    return this.$store.state.transfer;
  }
  private get account(): Account {
    return this.$store.state.account;
  }
  private created(): void {
    this.$store.state.branches.forEach((branch: Branch) => {
      if (branch.id === this.account.branchId) {
        this.branch = branch.name;
        this.$store.state.banks.forEach((bank: Bank) => {
          if (bank.id === branch.bankId) {
            this.bank = bank.name;
          }
        });
      }
    });
  }
}
</script>

<style lang="stylus">
  .header
    height 36px
</style>
