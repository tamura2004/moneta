<template lang="pug">
  LeafPageToolbar
    v-card.statements
      v-toolbar(color="primary" dark)
        v-toolbar-title 入出金明細
      v-list
        v-list-tile
          v-layout
            v-flex(xs3): v-list-tile-content.font-weight-bold 日付
            v-flex(xs1): v-list-tile-content.font-weight-bold 種別
            v-flex(xs2): v-list-tile-content.font-weight-bold 金額
            v-flex(xs3): v-list-tile-content.font-weight-bold 適用
            v-flex(xs3): v-list-tile-content.font-weight-bold 残高
        div(v-for="row in rows")
          v-divider
          v-list-tile
            v-layout
              v-flex(xs3): v-list-tile-content {{ row.date }}
              v-flex(xs1): v-list-tile-content {{ row.type }}
              v-flex(xs2): v-list-tile-content {{ row.monetaryAmount() }}
              v-flex(xs3): v-list-tile-content {{ row.memo }}
              v-flex(xs3): v-list-tile-content {{ row.monetaryTotal() }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LeafPageToolbar from '@/components/LeafPageToolbar.vue';
import Statement from '@/models/Statement';

@Component({
  components: {
    LeafPageToolbar,
  },
})
export default class Statements extends Vue {
  private get rows(): Statement[] {
    return this.$store.state.statements;
  }
}
</script>

<style lang="stylus">
  .statements
    width 70%
  
  table.v-table tbody td
    font-size 18px
</style>