<template lang="pug">
  v-container(text-xs-center style="position:relative")
    v-btn.main(fab dark large color="orange") 10,000,000

    h2.account 普通預金 655655
    h2.value 残高
    v-btn.back(round large color="white" @click="back") 戻る
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Balance extends Vue {
  private back($event: Event): void {
    this.$router.push('/');
  }
}
</script>

<style lang="stylus">
  .container
    position relative
  
  .account,.value
    position relative
    text-align center
    color white
    top -280px

  .v-btn.back
    position relative
    text-align center
    color white
    top -160px
    font-size 24px
    color orange
    text-decoration none

  .v-btn.main
    font-size 48px
    height 320px
    width 320px
</style>