<template lang="pug">
  div
    TransferInfo
    transition(name="transfer" mode="out-in")
      router-view
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TransferInfo from '@/components/TransferInfo.vue';

@Component({
  components: {
    TransferInfo,
  },
})
export default class Transfer extends Vue {
  private created(): void {
    this.$store.commit('transfer/clear');
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
