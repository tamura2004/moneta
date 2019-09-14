<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-select label="所属銀行" v-model="bankId" :items="$read('banks')" />
        <v-text-field label="支店名" v-model="name" />
        <v-text-field label="番号" v-model="num" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('click')">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>k

<script>
import { mapAccessors } from "~/plugins/mapAccessors";

export default {
  props: ["title"],
  computed: {
    ...mapAccessors("form/branch", ["bankId", "name", "num"]),
  },
};
</script>
