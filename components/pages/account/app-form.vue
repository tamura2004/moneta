<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-select
          label="銀行"
          :items="banks"
          :value="data.bankId"
          @input="bankId($event)"
          item-text="name"
          item-value="id"
        ></v-select>
        <v-select
          label="支店"
          :items="branches(data.bankId)"
          :value="data.branchId"
          @input="branchId($event)"
          item-text="name"
          item-value="id"
        ></v-select>
        <v-text-field label="氏名" :value="data.name" @input="name($event)" />
        <v-text-field label="ユーザー" :value="data.user" @input="user($event)" />
        <v-select label="口座種類" :items="['普通', '別段']" :value="data.kind" @input="kind($event)"></v-select>
        <v-text-field label="口座番号" :value="data.num" @input="num($event)" />
        <v-text-field label="残高" :value="data.total" @input="total(parseInt($event))" />
        <v-text-field label="パスワード" :value="data.password" @input="password($event)" />
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
    ...mapGetters("form/account", ["data"]),
    ...mapGetters("banks", ["banks"]),
    ...mapGetters("branches", ["branches"]),
  },
  methods: mapActions("form/account", [
    "bankId",
    "branchId",
    "name",
    "user",
    "kind",
    "num",
    "total",
    "password",
  ]),
};
</script>
