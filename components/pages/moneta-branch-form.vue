<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-select label="所属銀行" v-model="$branch.bankId" :items="$read('banks')" />
        <v-text-field label="支店名" v-model="$branch.name" />
        <v-text-field label="番号" v-model="$branch.num" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('click')">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>k

<script>
export default {
  props: ["title"],
};
</script>
