<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-text-field label="口座名" :value="data.name" @input="name($event)" />
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
  computed: mapGetters("form/account", ["data"]),
  methods: mapActions("form/account", ["name", "num"]),
};
</script>
