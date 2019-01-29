<template lang="pug">
  v-container(grid-list-md text-xs-center)
    v-layout.ma-1(row wrap style="border: grey solid 1px")
      v-flex(xs3)
        h1 {{ value }}
      v-flex(xs2)
        h1 {{ operator }}
      v-flex(xs7)
        h1 {{ num }}
    v-layout(row wrap)
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '7'") 7
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '8'") 8
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '9'") 9
      v-flex(xs3): v-card(dark color="primary"): v-card-text.px-0(@click="num=''") C
    v-layout
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '4'") 4
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '5'") 5
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '6'") 6
      v-flex(xs3): v-card(dark color="primary" @click="operator='-'"): v-card-text.px-0 -
    v-layout
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '1'") 1
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '2'") 2
      v-flex(xs3): v-card: v-card-text.px-0(@click="num += '3'") 3
      v-flex(xs3): v-card(dark color="primary" @click="operator='+'"): v-card-text.px-0 +
    v-layout
      v-flex(xs6): v-card: v-card-text.px-0(@click="num += '0'") 0
      v-flex(xs3): v-card: v-card-text.px-0 .
      v-flex(xs3): v-card(dark color="primary"): v-card-text.px-0 =
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Tenkey extends Vue {
  @Prop() private value!: number;
  private operator: string = '-';
  private num: string = '';
}
</script>
