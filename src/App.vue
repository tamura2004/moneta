<template lang="pug">
  v-app
    v-toolbar(app fixed)
      v-btn(flat icon @click="home")
        v-icon home
      v-toolbar-title {{ account && account.bankName }}
      v-toolbar-title {{ account && account.branchName }}
      v-spacer
      UserInfo
    v-content
      v-container(fluid)
        v-layout(align-start justify-center)
          v-flex(xs12 sm12 md8 lg8 x8)
            transition(name="router" mode="out-in")
              router-view
    v-footer(app)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Account } from '@/models/Account';
import Menu from '@/views/Menu.vue';
import UserInfo from '@/components/UserInfo.vue';
import { DB } from '@/plugins/firebase';

@Component({
  components: {
    Menu,
    UserInfo,
  },
})
export default class App extends Vue {
  private get account(): Account | undefined {
    return this.$store.state.account;
  }
  private created(): void {
    this.$store.dispatch('init');
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