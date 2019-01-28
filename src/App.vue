<template lang="pug">
  v-app
    v-toolbar(app fixed)
      v-btn(flat icon @click="home")
        v-icon home
      v-toolbar-title
        p.body-2.my-0 {{ account && account.bankName }}
        p.body-1.my-0 {{ account && account.branchName }}
      v-spacer
      UserInfo
    v-content
      v-container(fluid)
        v-layout(align-start justify-center v-show="!progress")
          v-flex(xs12 sm12 md8 lg8 x8)
            transition(name="router" mode="out-in")
              router-view
        v-layout(align-center justify-center fill-height v-show="progress")
          v-progress-circular.mt-5(:size="100" color="primary" indeterminate)
    v-footer(app)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/views/Menu.vue';
import UserInfo from '@/components/UserInfo.vue';

@Component({
  components: {
    Menu,
    UserInfo,
  },
})
export default class App extends Vue {
  private get account(): Account | undefined {
    return this.$store.getters.account;
  }
  private get progress(): boolean {
    return this.$store.state.progress;
  }
  private home(): void {
    this.$router.push('/');
  }
}
</script>

<style lang="stylus">
  .router-enter-active, .router-leave-active
    transition all 0.3s ease
  
  .router-enter
    transform translateX(100%)
  
  .router-leave-active
    transform translateX(-100%)
</style>