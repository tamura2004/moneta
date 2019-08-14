<template>
  <v-card class="mt-4 elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>振込先銀行を選択して下さい</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-select
          item-text="name"
          item-value="id"
          :items="banks"
          :value="bankId"
          @input="$store.commit('transfer/bankId', $event)"
        >
        </v-select>
        <v-btn
          nuxt
          dark
          to="branch"
          color="primary"
          :disabled="!bankId"
        >次へ</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('banks', ['banks']),
    ...mapGetters('transfer', ['bankId']),
  },
};
</script>
