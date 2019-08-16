<template>
  <v-card class="mt-4">
    <v-toolbar flat>
      <v-toolbar-title>銀行一覧</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch
        class="pt-8"
        color="primary"
        v-model="editable"
        label="編集"
      ></v-switch>
    </v-toolbar>
    <v-divider></v-divider>
    <template v-for="bank in banks">
      <v-list-item :key="bank.id">
        <v-list-item-icon>
          <v-btn
            small
            color="light"
            :to="`/admin/banks/${bank.id}/edit`"
            :disabled="!editable"
          >
            <v-icon left>mdi-pencil</v-icon> 編集
          </v-btn>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <v-layout>
              <v-flex xs4>{{ bank.timestamp | date }}</v-flex>
              <v-flex xs4>{{ bank.name }}</v-flex>
              <v-flex xs4>{{ bank.num }}</v-flex>
            </v-layout>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            small
            color="error"
            @click="remove(bank.id)"
            :disabled="!editable"
          >
            <v-icon left>mdi-delete</v-icon> 削除
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider :key="'div' + bank.id"></v-divider>
    </template>
    <v-card-actions class="pa-4">
      <v-btn small color="primary" to="/admin/banks/new" :disabled="!editable">
        <v-icon left>mdi-plus</v-icon> 追加
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    editable: false,
  }),
  computed: mapGetters("banks", ["banks"]),
  methods: mapActions("banks", ["remove"]),
};
</script>
