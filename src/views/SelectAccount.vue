<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 口座を選択して下さい
    v-card-text
      h2 {{ bank.name }}
      h2 {{ branch.name }}
      hr
      h2 {{ customer.name }}
      v-form
        v-select(
          prepend-icon="money"
          :items="accounts"
          :item-text="accountName"
          item-value="id"
          v-model="accountId"
        )
        p.red--text(v-if="error") 口座を選択して下さい
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="select") 選択
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LeafPageToolbar from '@/components/LeafPageToolbar.vue';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Customer from '@/models/Customer';
import Account from '@/models/Account';

@Component({
  components: {
    LeafPageToolbar,
  },
})
export default class SelectAccount extends Vue {
  private accountId: number = 0;
  private error: boolean = false;

  private select(): void {
    if (this.accountId === 0) {
      this.error = true;
    } else {
      const account: Account | undefined = this.accounts.find((b: Account) => b.id === this.accountId);
      if (account === undefined) {
        this.error = true;
      } else {
        this.$store.commit('setAccountTo', account);
        this.$router.push('/transfer');
      }
    }
  }

  private accountName(account: Account): string {
    return (account.kind + ' ' + account.num);
  }

  get bank(): Bank {
    return this.$store.state.transfer.BankTo;
  }

  get branch(): Branch {
    return this.$store.state.transfer.BranchTo;
  }

  get customer(): Customer {
    return this.$store.state.transfer.CustomerTo;
  }

  get accounts(): Account[] {
    const allAccount = this.$store.state.accounts;
    const customerId = this.customer.id;
    const accounts = allAccount.filter((a: Account) => a.customerId === customerId);
    return accounts;
  }
}
</script>

<style lang="stylus">
</style>
