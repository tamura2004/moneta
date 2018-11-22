<template lang="pug">
  v-app
    v-toolbar(app)
      v-toolbar-title.headline
        v-btn(flat icon x-large @click="back")
          v-icon arrow_back
          span 戻る
      v-spacer
      v-btn(flat)
        span.mr-2 login:モネタ太郎様
    v-content
      v-container(fluid)
        v-layout(row wrap)
          v-flex(
            xs10 offset-xs1
            sm10 offset-sm1
            md8 offset-md2
            lg6 offset-lg3
            xl6 offset-xl3
          )
            h2 入出金明細
            v-data-table.elevation-8#statement(:headers="headers" :items="statements")
              template(slot="items" slot-scope="props")
                td {{ props.item.date }}
                td {{ props.item.type }}
                td {{ props.item.amount }}
                td {{ props.item.comment }}
                td {{ props.item.total }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface Header {
  text: string;
  value: string;
}

interface Cell {
  date: string;
  type: string;
  amount: number;
  comment: string;
  total: number;
}

@Component
export default class Statement extends Vue {
  public headers: Header[] = [
    {
      text: '日付',
      value: 'date',
    },
    {
      text: '種別',
      value: 'type',
    },
    {
      text: '金額',
      value: 'amount',
    },
    {
      text: '適用',
      value: 'comment',
    },
    {
      text: '合計',
      value: 'total',
    },
  ];
  public statements: Cell[] = [
    {
      date: '2018/11/01',
      type: '入',
      amount: 3120,
      comment: '',
      total: 13120,
    },
    {
      date: '2018/11/01',
      type: '入',
      amount: 312000,
      comment: '給与',
      total: 1312000,
    },
    {
      date: '2018/11/01',
      type: '出',
      amount: 10220,
      comment: 'ガス料金',
      total: 1301780,
    },
  ];
  private back($event: Event): void {
    this.$router.push('/');
  }
}
</script>

<style lang="stylus">
  table.v-table tbody td
    font-size 24px
</style>