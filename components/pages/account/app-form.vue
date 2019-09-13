<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-select label="銀行" v-model="bankId" :items="banks" />
        <v-select label="支店" v-model="branchId" :items="brancheItems" />
        <v-text-field label="氏名" v-model="name" />
        <v-text-field label="ユーザー" v-model="user" />
        <v-select label="口座種類" v-model="kind" :items="['普通', '別段']" />
        <v-text-field label="口座番号" v-model="num" />
        <v-text-field label="残高" v-model="total" />
        <v-text-field label="パスワード" v-model="password" type="password" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('click')">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapAccessors } from "~/plugins/mapAccessors";
import { mapItems } from "~/plugins/mapItems";

export default {
  props: ["title"],
  computed: {
    brancheItems() {
      return this.branches.filter(v => v.bankId === this.bankId);
    },
    ...mapItems(["banks", "branches"]),
    ...mapAccessors("form/account", [
      "bankId",
      "branchId",
      "name",
      "user",
      "kind",
      "num",
      "total",
      "password",
    ]),
  },
};
</script>
