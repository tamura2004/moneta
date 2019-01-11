<template lang="pug">
  v-app
    v-toolbar(app fixed)
      v-btn(flat icon @click="home")
        v-icon home
      v-toolbar-title {{ bankName }}
      v-spacer
      UserInfo
    v-content
      v-layout(align-start justify-center)
        v-flex(xs12 sm12 md8 lg8 x8)
          transition(name="router" mode="out-in")
            router-view
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
  private mounted(): void {
    this.$store.dispatch('init');
  }
  get bankName(): string {
    if (this.$store.state.account !== undefined) {
      if (this.$store.state.account.bank !== undefined) {
        return this.$store.state.account.bank.name;
      } else {
        return '';
      }
    } else {
      return '';
    }
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