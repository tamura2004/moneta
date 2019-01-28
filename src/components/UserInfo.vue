<template lang="pug">
  v-toolbar-items
    v-btn.user(v-if="!!account" flat @click.stop="dialog=true") {{ account && account.name }}様
    v-btn.user(flat v-else @click="login") Login

    v-dialog(v-model="dialog")
      v-card
        v-card-title.grey.lighten-2 ログオフしてよろしいですか
        v-card-text {{ account && account.name }}様でログインしています
        v-divider
        v-card-actions
          v-spacer
          v-btn(@click="dialog=false") キャンセル
          v-btn(@click= "logoff" color="primary" dark) OK
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class UserInfo extends Vue {
  private dialog: boolean = false;

  private get account(): Account | undefined {
    return this.$store.getters.account;
  }
  private login() {
    this.$router.push({name: 'login'});
  }
  private logoff() {
    this.dialog = false;
    this.$store.commit('logoff');
    this.$router.push({name: 'login'});
  }
}
</script>
