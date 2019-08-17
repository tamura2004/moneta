<template>
  <v-btn
    small
    color="error"
    @click="$emit('click')"
    :disabled="!edit"
  >
    <v-icon left>mdi-delete</v-icon>削除
  </v-btn>
</template>

<script>
export default {
  props: ["edit"],
};
</script>
