<template lang="pug">
  v-card.elevation-12
    v-toolbar(dark color="primary")
      v-toolbar-title 口座開設
    v-card-text
      v-form
        v-select(prepend-icon="account_balance" label="銀行" :items="banks" item-text="name" item-value="id" v-model="form.bankId")
        v-select(prepend-icon="account_balance" label="支店" :items="branches" item-text="name" item-value="id" v-model="form.branchId")
        v-text-field(prepend-icon="person" name="ID" label="お名前" type="text" v-model="form.name")
        //- v-text-field(id="password" prepend-icon="lock" name="password" label="パスワード" type="password" v-model="form.password")
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="signin") 開設
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Bank from '@/models/Bank';
import Branch from '@/models/Branch';
import Account from '@/models/Account';
import Item from '@/models/Item';
import SignupState from '@/store/SignupState';

@Component
export default class Signin extends Vue {
  private form = new SignupState();

  private get banks() {
    return Item.banks(this.$store.state);
  }

  private get branches(): Item[] {
    return Item.branches(this.$store.state, this.form.bankId);
  }

  private async signin() {
    this.$store.commit('session/processing', true);
    const accountId = await this.$store.dispatch('session/signup', this.form);
    this.$store.commit('session/accountId', accountId);
    this.$router.push('/');
    this.$store.commit('session/processing', false);
  }
}
</script>

<style lang="stylus">
</style>
