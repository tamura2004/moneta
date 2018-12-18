<template lang="pug">
  v-app
    v-navigation-drawer(app)
    v-toolbar(app)
      v-btn(flat icon @click="home")
        v-icon home
      v-toolbar-title {{ bankName }}
      v-spacer
      UserInfo
    v-content
      v-container(fluid fill-height)
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
    if (this.$store.state.bank !== undefined) {
      return this.$store.state.bank.name;
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
    // opacity 0
  
  .router-leave-active
    // opacity 0
    transform translateX(-100%)
</style>