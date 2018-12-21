<template lang="pug">
  div#page
    v-btn#btn.ma-0.orange(fab dark large) {{ account.monetary }}
    div#inner-page
      h2#label 残高
      h2#account {{ account.kind }}預金 {{ account.num }}
      v-btn#statement-btn(round large color="white" @click="statements") 明細
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Account } from '@/models/Account';

@Component
export default class Balance extends Vue {
  private statements($event: Event): void {
    this.$router.push('/statements');
  }
  private get account(): Account {
    return this.$store.state.account;
  }
  private created(): void {
    this.$store.dispatch('updateBalance');
  }
}
</script>

<style lang="stylus">
  #page
    display grid
    grid-template-rows 320px 1fr
    grid-template-columns 1fr 320px 1fr
 
  #btn
    grid-row 1
    grid-column 2
    font-size 48px
    height 320px
    width 320px
    z-index 1

  #inner-page
    grid-row 1
    grid-column 2
    display grid
    grid-template-rows repeat(10, 1fr)
    grid-template-columns 1fr 200px 1fr
    z-index 2

  #label
    grid-row 2
    grid-column 2
    color white
    z-index 3
    text-align center

  #account
    grid-row 3
    grid-column 2
    color white
    z-index 4
    text-align center

  #statement-btn
    grid-row 9
    grid-column 2
    font-size 24px
    color orange
    text-decoration none
    z-index 5
</style>