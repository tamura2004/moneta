<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-select label="銀行" v-model="$account.bankId" :items="$read('banks')" />
        <v-select
          label="支店"
          v-model="$account.branchId"
          :items="$read('branches', v => v.bankId === $account.bankId)"
        />
        <v-text-field label="氏名" v-model="$account.name" />
        <v-text-field label="ユーザー" v-model="$account.user" />
        <v-select label="口座種類" v-model="$account.kind" :items="['普通', '別段']" />
        <v-text-field label="口座番号" v-model="$account.num" />
        <v-text-field label="残高" v-model="$account.total" />
        <v-text-field label="パスワード" v-model="$account.password" type="password" />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('click')">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["title"],
};
</script>
