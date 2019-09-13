<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-select label="所属銀行" v-model="bankId" :items="banks" />
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
import { mapGetters } from "vuex";
import { mapAccessors } from "~/plugins/mapAccessors";
import { mapItems } from "~/plugins/mapItems";

export default {
  props: ["title"],
  computed: {
    ...mapItems(["banks"]),
    ...mapAccessors("form/branch", ["bankId", "name", "num"]),
  },
};
</script>
