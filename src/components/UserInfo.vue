<template lang="pug">
  v-toolbar-items
    v-btn.user(flat v-if="authenticated" @click="logoff") 百音田 太郎様
    v-btn.user(flat v-else @click="login") Login
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class UserInfo extends Vue {
  get authenticated(): boolean {
    return this.$store.state.authenticated;
  }

  private login() {
    this.$router.push({name: 'login'});
  }
  private logoff() {
    if (window.confirm('ログオフしてよろしいですか')) {
      this.$store.commit('authenticate');
      this.$router.push({name: 'menu'});
    }
  }
}
</script>

<style lang="stylus">
  .v-btn.user
    font-size 18px
</style>