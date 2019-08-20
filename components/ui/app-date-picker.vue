<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field :value="value" @input="$emit('input', $event)" :label="label" readonly clearable v-on="on"></v-text-field>
    </template>
    <v-date-picker :value="value" @input="save($event)"></v-date-picker>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    menu: false,
    model: false,
  }),
  props: ["label", "value"],
  computed: {
    date() {
      return this.value.toISOString().substr(0, 10);
    }
  },
  methods: {
    save(date) {
      this.menu = false;
      this.$emit("input", date);
    },
  },
};
</script>
