<template lang="pug">
  v-card.elevation-12
    v-toolbar(dark color="primary")
      v-toolbar-title ログイン
    v-card-text
      v-form(v-model="valid")
        v-select(
          prepend-icon="person"
          label="userid"
          :items="accounts"
          item-text="name"
          item-value="id"
          v-model="accountId"
          :rules="rules"
        )
        //- v-text-field(prepend-icon="person" name="ID" label="ID" type="text" v-model="id")
        v-text-field(id="password" prepend-icon="lock" name="password" label="password" type="password" v-model="pass")
    v-card-actions
      v-spacer
      v-btn(color="success" @click="signin") 口座開設
      v-btn(color="primary" @click="login" :disabled="!valid") ログイン
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Account from '@/models/Account';
import { DB } from '@/plugins/firebase';

interface Item {
  id: string;
  name: string;
}

@Component
export default class Login extends Vue {
  private accountId: string = '';
  private pass: string = '';
  private valid: boolean = false;

  private rules = [
    (v: string) => v !== '' || 'IDまたはパスワードが違います',
  ];

  private get accounts(): Item[] {
    const items = [];
    for (const [key, account] of this.$store.state.accounts) {
      items.push({ id: key, name: account.name });
    }
    return items;
  }

  private login(): void {
    this.$store.dispatch('login', this.accountId);
    this.$router.push('/');
  }
  private signin(): void {
    this.$router.push('/signin');
  }
}
</script>

<style lang="stylus">
</style>
