<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-text-field label="表題" :value="data.name" @input="name($event)"></v-text-field>
        <v-radio-group row :value="data.category" @change="category($event)">
          <v-radio label="バグ" value="error" color="error"></v-radio>
          <v-radio label="リファクタリング" value="warning" color="warning"></v-radio>
          <v-radio label="操作性改善" value="primary" color="primary"></v-radio>
          <v-radio label="機能追加" value="success" color="success"></v-radio>
        </v-radio-group>
        <app-form-block name="report" label="発見"></app-form-block>
        <app-form-block name="design" label="設計" v-if="reportDate"></app-form-block>
        <app-form-block name="develop" label="開発" v-if="designDate"></app-form-block>
        <app-form-block name="test" label="検証" v-if="developDate"></app-form-block>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn block color="primary" @click="$emit('click')">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appFormBlock from "~/components/pages/bug/app-form-block";

export default {
  components: {
    appFormBlock,
  },
  props: ["title"],
  computed: {
    ...mapGetters("form/bug", ["data", "reportDate", "designDate", "developDate"]),
  },
  methods: mapActions("form/bug", [
    "name",
    "category",
  ]),
};
</script>
