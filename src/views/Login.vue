<template lang="pug">
  v-card.elevation-12
    v-toolbar(dark color="primary")
      v-toolbar-title ログイン
    v-card-text
      v-form
        v-select(
          prepend-icon="person"
          :items="accounts"
          item-text="name"
          item-value="id"
          v-model="accountId"
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
import { DB } from '@/plugins/firebase';

@Component({
  firestore: {
    accounts: DB.collection('accounts'),
  },
})
export default class Login extends Vue {
  private accountId: string = '';
  private pass: string = '';
  private error: boolean = false;
  // private accounts: Array<Partial<Account>> = [];
  private login(): void {
    const account = this.$store.state.accounts.find((a: Partial<Account>) => a.id === this.accountId);
    if (account !== undefined) {
      this.$store.dispatch('login', account);
      this.$router.push('/');
    } else {
      this.accountId = '';
      this.pass = '';
      this.error = true;
    }
  }
  private signin(): void {
    this.$router.push('/signin');
  }
  private get accounts(): Array<Partial<Account>> {
    return this.$store.state.accounts.map((account: Account) => ({
      id: account.id,
      name: `${account.bankName} ${account.branchName} ${account.name}`,
    }));
  }
}
</script>

<style lang="stylus">
</style>
