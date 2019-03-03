<template lang="pug">
  v-list.elevation-6
    v-subheader.header  振込元
    TransferInfoFrom
    v-divider
    v-subheader.header  振込先
    TransferInfoTo
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
import TransferInfoTo from '@/components/TransferInfoTo.vue';

@Component({
  components: {
    TransferInfoFrom,
    TransferInfoTo,
  },
})
export default class TransferInfo extends Vue {
}
</script>

<style lang="stylus" scoped>
  .header
    height 36px
</style>
