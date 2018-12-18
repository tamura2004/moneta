<template lang="pug">
  v-card.elevation-12
    v-toolbar(dark color="primary")
      v-toolbar-title ログイン
    v-card-text
      v-form
        v-select(
          prepend-icon="person"
          :items="customerNames"
          v-model="id"
        )
        //- v-text-field(prepend-icon="person" name="ID" label="ID" type="text" v-model="id")
        v-text-field(id="password" prepend-icon="lock" name="password" label="password" type="password" v-model="pass")
        p.red--text(v-if="error") IDまたはパスワードが違います
    v-card-actions
      v-spacer
      v-btn(color="primary" @click="login") ログイン
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Customer from '@/models/Customer';
// import Account from '@/models/Account';
import md5 from 'md5';

@Component
export default class Login extends Vue {
  private id: string = '';
  private pass: string = '';
  private error: boolean = false;

  private login(): void {
    const customer: Customer | undefined = this.$store.state.customers.find((c: Customer) => {
      return (c.name === this.id);
    });

    // if (customer !== undefined && md5(this.pass) === customer.hashedPassword) {
    if (customer !== undefined) {
      this.$store.dispatch('login', customer);
      // this.$store.commit('authenticate', customer);
      this.$router.push('/');
    } else {
      this.id = '';
      this.pass = '';
      this.error = true;
    }
  }
  get customerNames(): string[] {
    return this.$store.state.customers.map((c: Customer) => c.name);
  }
  // private created(): void {
  //   this.$store.dispatch('getCustomers');
  // }
}
</script>

<style lang="stylus">
</style>
