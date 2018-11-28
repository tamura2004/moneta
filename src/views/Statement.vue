<template lang="pug">
  LeafPageToolbar
    v-container(fluid)
      v-layout(row wrap)
        v-flex(
          xs10 offset-xs1
          sm10 offset-sm1
          md8 offset-md2
          lg6 offset-lg3
          xl6 offset-xl3
        )
          v-card
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
                    v-flex(xs2): v-list-tile-content {{ row.amount }}
                    v-flex(xs3): v-list-tile-content {{ row.memo }}
                    v-flex(xs3): v-list-tile-content {{ row.total }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LeafPageToolbar from '@/components/LeafPageToolbar.vue';

interface Row {
  date: string;
  type: string;
  amount: string;
  memo: string;
  total: string;
}

@Component({
  components: {
    LeafPageToolbar,
  },
})
export default class Statement extends Vue {
  private get rows(): Row[] {
    return this.$store.state.statements;
  }
}
</script>

<style lang="stylus">
  table.v-table tbody td
    font-size 18px
</style>