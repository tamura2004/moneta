<template lang="pug">
  v-toolbar-items
    v-btn.user(flat v-if="!!account" @click="logoff") {{ account && account.name }}様
    v-btn.user(flat v-else @click="login") Login
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class UserInfo extends Vue {
  private get account(): Account | undefined {
    return this.$store.getters.account;
  }
  private login() {
    this.$router.push({name: 'login'});
  }
  private logoff() {
    if (window.confirm('ログオフしてよろしいですか')) {
      this.$store.commit('logoff');
      this.$router.push({name: 'login'});
    }
  }
}
</script>

<style lang="stylus">
  .v-btn.user
    font-size 18px
</style>