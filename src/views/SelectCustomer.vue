<template lang="pug">
  v-card.elevation-12.mt-4
    v-toolbar(dark color="primary")
      v-toolbar-title 送信先を選択して下さい
    v-card-text
      h2 {{ bank.name }}
      h2 {{ branch.name }}
      v-form
        v-select(
          prepend-icon="person"
          :items="customers"
          item-text="name"
          item-value="id"
          v-model="customerId"
        )
        p.red--text(v-if="error") 送信先を選択して下さい
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

@Component({
  components: {
    LeafPageToolbar,
  },
})
export default class SelectCustomer extends Vue {
  private customerId: number = 0;
  private error: boolean = false;

  private select(): void {
    if (this.customerId === undefined) {
      this.error = true;
    } else {
      const customer: Customer | undefined = this.customers.find((b: Customer) => b.id === this.customerId);
      if (customer === undefined) {
        this.error = true;
      } else {
        this.$store.commit('setCustomerTo', customer);
        this.$router.push('/selectAccount');
      }
    }
  }
  get bank(): Bank {
    return this.$store.state.transfer.BankTo;
  }

  get branch(): Branch {
    return this.$store.state.transfer.BranchTo;
  }

  get customers(): Customer[] {
    const allCustomer = this.$store.state.customers;
    const branchId = this.branch.id;
    const customers = allCustomer.filter((c: Customer) => c.branchId === branchId);
    return customers;
  }
}
</script>

<style lang="stylus">
</style>
