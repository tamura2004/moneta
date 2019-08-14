<template>
  <v-card class="elevation-12 mt-8">
    <v-toolbar dark color="primary">
      <v-toolbar-title>口座開設</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select
          item-text="name"
          item-value="id"
          :items="banks"
          :value="bankId"
          @input="$store.commit('signin/bankId', $event)"
        ></v-select>
        <v-select
          item-text="name"
          item-value="id"
          :items="branches(bankId)"
          :value="branchId"
          @input="$store.commit('signin/branchId', $event)"
        ></v-select>
        <v-text-field
          type="text"
          :value="name"
          @input="$store.commit('signin/name', $event)"
        ></v-text-field>
        <v-text-field
          type="password"
          :value="password"
          @input="$store.commit('signin/password', $event)"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        @click="signin"
      >口座開設</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import md5 from 'blueimp-md5';

export default {
  layout: 'login',
  computed: {
    ...mapGetters('signin', ['bankId', 'branchId', 'name', 'password', 'account', 'statement']),
    ...mapGetters('banks', ['banks']),
    ...mapGetters('branches', ['branches']),
  },
  methods: {
    async signin() {
      await this.$store.dispatch('signin/signin');
      this.$router.push('/');
    }
  }
}
</script>
