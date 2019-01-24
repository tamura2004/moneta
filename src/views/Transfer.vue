<template lang="pug">
  div
    TransferCard
    transition(name="transfer" mode="out-in")
      BankSelectCard(v-if="progress === 'BANK'")
      BranchSelectCard(v-if="progress === 'BRANCH'")
      AccountSelectCard(v-if="progress === 'ACCOUNT'")
      InputAmount(v-if="progress === 'AMOUNT'")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { TransferProgress } from '@/models/Transfer';
import TransferCard from '@/components/TransferCard.vue';
import BankSelectCard from '@/components/BankSelectCard.vue';
import BranchSelectCard from '@/components/BranchSelectCard.vue';
import AccountSelectCard from '@/components/AccountSelectCard.vue';
import InputAmount from '@/components/InputAmount.vue';

@Component({
  components: {
    TransferCard,
    BankSelectCard,
    BranchSelectCard,
    AccountSelectCard,
    InputAmount,
  },
})
export default class Transfer extends Vue {
  private get progress(): TransferProgress {
    return this.$store.getters.progress;
  }
  private created(): void {
    this.$store.commit('newTransfer');
    // this.$store.dispatch('updateBalance');
  }
}
</script>

<style lang="stylus">
  .transfer-enter-active, .transfer-leave-active
    transition all 0.3s ease
  
  .transfer-enter
    transform translateX(100%)
    opacity 0
  
  .transfer-leave-to
    transform translateX(-100%)
    opacity 0
</style>
