<template>
  <div>
    <v-row>
      <v-col>
        <app-user-select :label="`${label}者`" :value="user" @input="modifyUser($event)" />
      </v-col>
      <v-col>
        <app-date-picker :label="`${label}日`" :value="date" @input="modifyDate($event)" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea :label="`${label}内容`" :value="description" @input="modifyDescription($event)"></v-textarea>
      </v-col>
    </v-row>
  </div>
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
  props: ["label", "name"],
  computed: {
    user() {
      return this.$store.getters[`form/bug/${this.name}User`];
    },
    date() {
      return this.$store.getters[`form/bug/${this.name}Date`];
    },
    description() {
      return this.$store.getters[`form/bug/${this.name}Description`];
    },
  },
  methods: {
    modifyUser(user) {
      this.$store.dispatch(`form/bug/${this.name}User`, user);
    },
    modifyDate(date) {
      this.$store.dispatch(`form/bug/${this.name}Date`, date);
    },
    modifyDescription(description) {
      this.$store.dispatch(`form/bug/${this.name}Description`, description);
    },
  },
};
</script>
