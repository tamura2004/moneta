<template lang="pug">
  LeafPageToolbar
    v-card.elevation-12.mt-4
      v-toolbar(dark color="primary")
        v-toolbar-title 支店を選択して下さい
      v-card-text
        h2 {{ bank.name }}
        v-form
          v-select(
            prepend-icon="account_balance"
            :items="branches"
            item-text="name"
            item-value="id"
            v-model="branchId"
          )
          p.red--text(v-if="error") 支店を選択して下さい
      v-card-actions
        v-spacer
        v-btn(color="primary" @click="select") 選択
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LeafPageToolbar from '@/components/LeafPageToolbar.vue';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';

@Component({
  components: {
    LeafPageToolbar,
  },
})
export default class SelectBranch extends Vue {
  private branchId: number = 0;
  private error: boolean = false;

  private select(): void {
    if (this.branchId === undefined) {
      this.error = true;
    } else {
      const branch: Branch | undefined = this.branches.find((b: Branch) => b.id === this.branchId);
      if (branch === undefined) {
        this.error = true;
      } else {
        this.$store.commit('setBranchTo', branch);
        this.$router.push('/selectCustomer')
      }
    }
  }
  get bank(): Bank {
    return this.$store.state.transfer.BankTo;
  }

  get branches(): Branch[] {
    const allBranch = this.$store.state.branches;
    const bankId = this.bank.id;
    const branches = allBranch.filter((b: Branch) => b.bankId === bankId);
    return branches;
  }
}
</script>

<style lang="stylus">
</style>
