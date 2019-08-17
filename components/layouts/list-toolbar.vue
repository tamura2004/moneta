<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch class="pt-8" color="primary" :value="edit" @change="$emit('change')" label="編集"></v-switch>
    </v-toolbar>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["edit", "title"],
};
</script>
