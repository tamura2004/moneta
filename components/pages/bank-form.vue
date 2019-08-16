<template>
  <v-card class="mt-4">
    <v-card-title>銀行情報</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-text-field label="銀行名" :value="data.name" @input="name($event)" />
        <v-text-field label="番号" :value="data.num" @input="num($event)" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <slot />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters("form/bank", ["data"]),
  methods: mapActions("form/bank", ["name", "num"]),
};
</script>
