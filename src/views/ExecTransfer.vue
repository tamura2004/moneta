<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 金額をご入力下さい
    v-card-text
      h2 {{ bank.name }}
      h2 {{ branch.name }}
      h2 {{ customer.name }}
      h2 {{ account.kind + account.num }}
      hr
      v-form
        v-text-field(
          prepend-icon="money"
          name="金額"
          label="金額 "
          type="number"
          v-model="amount"
        )
        p.red--text(v-if="error") 残高が不足しています
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="exec" :disabled="empty") 振込実行
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LeafPageToolbar from '@/components/LeafPageToolbar.vue';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Customer from '@/models/Customer';
import Account from '@/models/Account';
import axios from 'axios';

@Component({
  components: {
    LeafPageToolbar,
  },
})
export default class ExecTransfer extends Vue {
  private amount: string = '';
  private error: boolean = false;

  private exec(): void {
    if (Number(this.amount) > Number(this.balance)) {
      this.error = true;
    } else {
      const idFrom = this.$store.state.account.id;
      const idTo = this.$store.state.transfer.AccountTo.id;
      const url = `accounts/${idFrom}/account_to/${idTo}/amount/${this.amount}/transfer`;
      axios.get(`http://localhost:3000/${url}`).then((res) => {
        this.$router.push('/statements');
      });
    }
  }
  get empty(): boolean {
    return this.amount === '';
  }
  get balance(): string {
    return this.$store.getters.balance;
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
  get account(): Customer {
    return this.$store.state.transfer.AccountTo;
  }
}
</script>

<style lang="stylus">
</style>
