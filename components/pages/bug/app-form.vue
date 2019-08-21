<template>
  <v-card class="mt-4">
    <v-card-title>{{ title }}</v-card-title>
    <v-divider />
    <v-card-text>
      <v-form>
        <v-text-field label="表題" :value="data.name" @input="name($event)"></v-text-field>
        <v-row>
          <v-col>
            <app-user-select label="発見者" :value="data.reporter" @input="reporter($event)" />
          </v-col>
          <v-col>
            <app-date-picker label="発見日" :value="data.reportDate" @input="reportDate($event)" />
          </v-col>
        </v-row>
        <v-radio-group row :value="data.impactRate" @change="impactRate($event)">
          <v-radio label="重大" value="error" color="error"></v-radio>
          <v-radio label="軽微" value="warning" color="warning"></v-radio>
          <v-radio label="改善" value="primary" color="primary"></v-radio>
          <v-radio label="追加" value="success" color="success"></v-radio>
        </v-radio-group>
        <v-textarea label="発生事象" :value="data.bugDescription" @input="bugDescription($event)"></v-textarea>
        <v-row>
          <v-col>
            <app-user-select label="調査対応者" :value="data.inspector" @input="inspector($event)"></app-user-select>
          </v-col>
          <v-col>
            <app-date-picker label="調査対応完了日" :value="data.inspectDate" @input="inspectDate($event)"></app-date-picker>
          </v-col>
        </v-row>
        <v-textarea label="直接原因" :value="data.directCause" @input="directCause($event)"></v-textarea>
        <v-textarea label="根本原因" :value="data.rootCause" @input="rootCause($event)"></v-textarea>
        <v-textarea
          label="本格対応内容"
          :value="data.fullRecoverDescription"
          @input="fullRecoverDescription($event)"
        ></v-textarea>
        <v-row>
          <v-col>
            <app-user-select
              label="本格対応対応者"
              :value="data.fullRecoverer"
              @input="fullRecoverer($event)"
            ></app-user-select>
          </v-col>
          <v-col>
            <app-date-picker
              label="プログラム修正完了日"
              :value="data.commitDate"
              @input="commitDate($event)"
            ></app-date-picker>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <app-date-picker label="テスト完了日" :value="data.testDate" @input="testDate($event)"></app-date-picker>
          </v-col>
          <v-col>
            <app-date-picker label="本番反映完了日" :value="data.deployDate" @input="deployDate($event)"></app-date-picker>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <app-date-picker label="動作検証完了日" :value="data.checkDate" @input="checkDate($event)"></app-date-picker>
          </v-col>
          <v-col>
            <app-date-picker label="対応完了日" :value="data.completeDate" @input="completeDate($event)"></app-date-picker>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('click')">登録</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import appDatePicker from "~/components/ui/app-date-picker";
import appUserSelect from "~/components/ui/app-user-select";

export default {
  components: {
    appDatePicker,
    appUserSelect,
  },
  props: ["title"],
  computed: {
    ...mapGetters("form/bug", ["data"]),
    ...mapGetters("banks", ["banks"]),
    ...mapGetters("accounts", ["accounts"]),
  },
  methods: mapActions("form/bug", [
    "name",
    "reporter",
    "reportDate",
    "bugDescription",
    "impactRate",
    "interimRecoverer",
    "interimRecoverDate",
    "inspector",
    "inspectDate",
    "directCause",
    "rootCause",
    "fullRecoverDescription",
    "fullRecoverer",
    "commitDate",
    "testDate",
    "deployDate",
    "checkDate",
    "completeDate",
  ]),
};
</script>
