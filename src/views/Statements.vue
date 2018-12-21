<template lang="pug">
  v-card
    v-toolbar(color="primary" dark)
      v-toolbar-title 入出金明細
    v-list(two-line)
      div(v-for="row in rows")
        v-divider
        v-list-tile-content.pa-1
          v-list-tile-title
            v-layout
              v-flex(xs4) {{ row.date }}
              v-flex(xs8) {{ row.memo }}
          v-list-tile-sub-title
            v-layout
              v-flex(xs4) {{ row.kind }}
              v-flex(xs4) {{ row.monetaryAmount() }}
              v-flex(xs4) {{ row.monetaryTotal() }}

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
  private created(): void {
    this.$store.dispatch('getStatements');
  }
}
</script>

<style lang="stylus">
  table.v-table tbody td
    font-size 18px
</style>