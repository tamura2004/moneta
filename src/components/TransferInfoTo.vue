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
          v-flex(xs6) {{ account && account.name }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { DB } from '@/plugins/firebase';
import { mapGetters } from 'vuex';

import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Account from '@/models/Account';
import TransferState from '@/store/TransferState';
import TransferInfoFrom from '@/components/TransferInfoFrom.vue';

@Component({
  computed: {
    ...mapGetters('transfer', ['bank', 'branch', 'account']),
  },
})
export default class TransferInfo extends Vue {
}
</script>

<style lang="stylus">
</style>
