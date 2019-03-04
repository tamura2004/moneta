<template lang="pug">
  v-card
    v-toolbar(color="primary" dark)
      v-toolbar-title 入出金明細
    v-list(two-line)
      div(v-for="[key, statement] in Array.from(statements)" :key="key")
        v-divider
        v-list-tile-content.pa-1
          v-list-tile-title
            v-layout
              v-flex(xs4) {{ statement.date }}
              v-flex(xs8) {{ statement.memo }}
          v-list-tile-sub-title
            v-layout
              v-flex(xs4) {{ statement.kind }}
              v-flex(xs4) {{ statement.amount | threeDigitedYen }}
              v-flex(xs4) {{ statement.total | threeDigitedYen }}
      v-btn(absolute dark fab right color="primary" @click="home")
        v-icon home

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Statement from '@/models/Statement';

@Component({
  computed: {
    ...mapGetters('session', ['statements']),
  },
})
export default class Statements extends Vue {
  private home(): void {
    this.$router.push('/');
  }
}
</script>

<style lang="stylus">
  table.v-table tbody td
    font-size 18px
</style>