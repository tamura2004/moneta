<template lang="pug">
  v-toolbar-items
    v-btn(
      flat
      @click="onClick"
    ) {{ label }}

    v-dialog(v-model="dialog" v-if="dialog")
      v-card
        v-card-title.grey.lighten-2 ログオフしてよろしいですか
        v-card-text {{ account && account.name }}様でログインしています
        v-divider
        v-card-actions
          v-spacer
          v-btn(
            @click="dialog = false"
          ) キャンセル
          v-btn(
            dark
            @click= "logoff"
            color="primary"
          ) OK
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component
export default class TheUserInfo extends Vue {
  @Prop() private account!: Account | undefined;

  private dialog: boolean = false;

  private get label(): string {
    if (this.account !== undefined) {
      return `${this.account.name}様`;
    } else {
      return 'Login';
    }
  }

  private onClick(): void {
    if (this.account !== undefined) {
      this.dialog = true;
    } else {
      this.$router.push('/login');
    }
  }
  private logoff() {
    this.dialog = false;
    this.$store.dispatch('session/logoff');
    this.$router.push('/login');
  }
}
</script>
