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
      v-container(text-xs-center style="position:relative")
        v-btn.main(fab dark large color="orange") 10,000,000
        h2.value 残高
        h2.account 普通預金 655655
        v-btn.back(round large color="white" @click="back") 戻る
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Balance extends Vue {
  private back($event: Event): void {
    this.$router.push('/');
  }
}
</script>

<style lang="stylus">
  circle_size = 320px

  .container
    position relative
  
  .overlap
    position relative
    text-align center
    color white

  .account,.value
    @extend .overlap
    top -300px

  .v-btn.back
    @extend .overlap
    top -150px
    font-size 24px
    color orange
    text-decoration none

  .v-btn.main
    font-size 48px
    height circle_size
    width circle_size
</style>