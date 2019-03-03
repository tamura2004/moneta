<template lang="pug">
  v-list-tile
    v-list-tile-content
      v-list-tile-title
        v-layout
          v-flex(xs6) {{ bank && bank.name }}
          v-flex(xs6) {{ branch && branch.name }}
      v-list-tile-title
        v-layout
          v-flex(xs2) {{ account && account.kind }}
          v-flex(xs4) {{ account && account.num }}
          v-flex(xs2) 残高
          v-flex(xs4) {{ account && account.total | threeDigitedYen }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters('session', ['bank', 'branch', 'account']),
  },
})
export default class TransferInfoFrom extends Vue {
}
</script>

<style lang="stylus">
</style>
