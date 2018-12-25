<template lang="pug">
  v-card.elevation-12
    v-toolbar(dark color="primary")
      v-toolbar-title 口座開設
    v-card-text
      v-form
        v-select(
          prepend-icon="person"
          :items="accounts"
          item-text="name"
          item-value="id"
          v-model="id"
        )
        //- v-text-field(prepend-icon="person" name="ID" label="ID" type="text" v-model="id")
        v-text-field(id="password" prepend-icon="lock" name="password" label="password" type="password" v-model="pass")
        p.red--text(v-if="error") IDまたはパスワードが違います
    v-card-actions
      v-spacer
      v-btn(color="success" @click="signin") 口座開設
      v-btn(color="primary" @click="login") ログイン
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Account } from '@/models/Account';
import md5 from 'md5';

@Component
export default class NewAccount extends Vue {
  private id: string = '';
  private pass: string = '';
  private error: boolean = false;

  private get accounts() {
    return this.$store.state.accounts;
  }
  private login(): void {
    const account: Account | undefined = this.$store.state.accounts.find((a: Account) => {
      return (a.id === Number(this.id));
    });

    if (account !== undefined) {
      this.$store.dispatch('login', account);
      this.$router.push('/');
    } else {
      this.id = '';
      this.pass = '';
      this.error = true;
    }
  }
  private signin(): void {
    
  }
  private created(): void {
    this.$store.dispatch('getAccounts');
  }
}
</script>

<style lang="stylus">
</style>
