<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-text-field label="銀行名" v-model="name" />
        <v-text-field label="番号" v-model="num" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('click')">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";

export default {
  props: ["title"],
  computed: mapAccessors("form/bank", ["name", "num"]),
};
</script>
