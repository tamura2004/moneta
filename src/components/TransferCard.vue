<template lang="pug">
  v-list
    v-subheader 振込元
    v-list-tile banka
    v-divider
    v-subheader 振込先
    v-list-tile
      v-list-tile-content
        v-list-tile-title
    v-divider
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Transfer from '@/models/Transfer';

@Component({
  components: {
  },
})
export default class TransferCard extends Vue {
  get transfer(): Transfer {
    return this.$store.state.transfer;
  }
}
</script>

<style lang="stylus">
</style>
