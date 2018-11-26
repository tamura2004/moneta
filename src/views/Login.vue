<template lang="pug">
v-app
  v-content
    v-container(fluid fill-height)
      v-layout(align-center justify-center)
        v-flex(xs8 sm6 md4 lg3 xl2)
          v-card.elevation-12
            v-toolbar(dark color="primary")
              v-toolbar-title ログイン
            v-card-text
              v-form
                v-text-field(prepend-icon="person" name="ID" label="ID" type="text" v-model="id")
                v-text-field(id="password" prepend-icon="lock" name="password" label="password" type="text" v-model="pass")
                p.red--text(v-if="error") IDまたはパスワードが違います
            v-card-actions
              v-spacer
              v-btn(color="primary" @click="menu") ログイン
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private id: string = '';
  private pass: string = '';
  private error: boolean = false;

  private menu(): void {
    if (this.pass === '0001') {
      this.$store.commit('authenticate');
      this.$router.push('/');
    } else {
      this.id = '';
      this.pass = '';
      this.error = true;
    }
  }
}
</script>

<style lang="stylus">
</style>