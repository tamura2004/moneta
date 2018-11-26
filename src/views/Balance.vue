<template lang="pug">
  v-app
    v-toolbar(app)
      v-toolbar-title.headline
        v-btn(flat icon x-large @click="back")
          v-icon arrow_back
          span 戻る
      v-spacer
      UserInfo
    v-content
      v-container(text-xs-center style="position:relative")
        v-btn.main(fab dark large color="orange") {{ balance() }}
        h2.value 残高
        h2.account 普通預金 655655
        v-btn.back(round large color="white" @click="statements") 明細
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserInfo from '@/components/UserInfo.vue';

@Component({
  components: {
    UserInfo,
  },
})
export default class Balance extends Vue {
  private statements($event: Event): void {
    this.$router.push({name: 'statement'});
  }
  private balance(): string {
    const n = this.$store.state.balance;
    return '￥' + Number(n).toLocaleString() + '-';
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