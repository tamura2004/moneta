<template lang="pug">
  v-card.elevation-12
    v-toolbar(dark color="primary")
      v-toolbar-title 口座開設
    v-card-text
      v-form
        v-select(prepend-icon="account_balance" label="銀行" :items="banks" item-text="name" item-value="id" v-model="form.bankId")
        v-select(prepend-icon="account_balance" label="支店" :items="branches" item-text="name" item-value="id" v-model="form.branchId")
        v-text-field(prepend-icon="person" name="ID" label="お名前" type="text" v-model="form.name")
        v-text-field(id="password" prepend-icon="lock" name="password" label="パスワード" type="password" v-model="form.pass")
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="signin") 開設
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Bank } from '@/models/Bank';
import { Branch } from '@/models/Branch';

@Component
export default class Signin extends Vue {
  private form = {
    bankId: 0,
    branchId: 0,
    pass: '',
    name: '',
  };

  private get banks(): Bank[] {
    return this.$store.state.banks;
  }

  private get branches(): Branch[] {
    return this.$store.state.branches.filter((b: Branch) => b.bank_id === this.form.bankId);
  }

  private signin(): void {
    this.$store.dispatch('createAccount', this.form);
    this.$router.push('/login');
  }

  private created(): void {
    this.$store.dispatch('getAccounts');
  }
}
</script>

<style lang="stylus">
</style>
