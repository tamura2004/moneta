<template>
  <v-btn small color="light" :to="to" :disabled="!edit">
    <v-icon left>mdi-pencil</v-icon>編集
  </v-btn>
</template>

<script>
export default {
  props: ["to", "edit"],
};
</script>
