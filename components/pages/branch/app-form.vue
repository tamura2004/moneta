<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-select
          label="所属銀行"
          :items="banks"
          :value="data.bankId"
          @input="bankId($event)"
          item-text="name"
          item-value="id"
        ></v-select>
        <v-text-field label="支店名" :value="data.name" @input="name($event)" />
        <v-text-field label="番号" :value="data.num" @input="num($event)" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('click')">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["title"],
  computed: {
    ...mapGetters("form/branch", ["data"]),
    ...mapGetters("banks", ["banks"]),
  },
  methods: mapActions("form/branch", ["bankId", "name", "num"]),
};
</script>
