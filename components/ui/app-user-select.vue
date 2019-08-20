<template>
  <v-select
    :label="label"
    :items="accounts('ALL')"
    :value="value"
    @input="$emit('input', $event)"
    item-text="name"
    item-value="id"
  ></v-select>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appDatePicker from "~/components/ui/app-date-picker";

export default {
  props: ["label", "value"],
  computed: {
    ...mapGetters("accounts", ["accounts"]),
  },
};
</script>
