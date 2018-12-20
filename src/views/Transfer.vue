<template lang="pug">
  div
    TransferCard
    SelectBank(v-if="progress === 'BANK'")
    SelectBranch(v-if="progress === 'BRANCH'")
    SelectAccount(v-if="progress === 'ACCOUNT'")
    InputAmount(v-if="progress === 'AMOUNT'")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TransferCard from '@/components/TransferCard.vue';
import SelectBank from '@/components/SelectBank.vue';
import SelectBranch from '@/components/SelectBranch.vue';
import SelectAccount from '@/components/SelectAccount.vue';
import InputAmount from '@/components/InputAmount.vue';

@Component({
  components: {
    TransferCard,
    SelectBank,
    SelectBranch,
    SelectAccount,
    InputAmount,
  },
})
export default class Transfer extends Vue {
  private get progress(): 'BANK' | 'BRANCH' | 'ACCOUNT' | 'AMOUNT' {
    return this.$store.getters.progress;
  }
  private mounted(): void {
    this.$store.commit('newTransfer');
  }
}
</script>

<style lang="stylus">
</style>
