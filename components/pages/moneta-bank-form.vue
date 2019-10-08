<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form v-model="$nav.valid">
        <v-text-field label="銀行名" v-model="$bank.name" :rules="rules" />
        <v-text-field label="番号" v-model="$bank.num" :rules="rules" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('click')" :disabled="!$nav.valid">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["title"],
  computed: {
    rules() {
      return [v => !!v || "必須項目です"];
    },
  },
};
</script>
