<template>
  <div>
    <h1 class="display-4">ここは上です</h1>
    <v-row>
      <v-col>
        <code>{{ direction }}</code>
      </v-col>
      <v-col>
        <v-btn @click="index = 1 - index">UP ⇔ DOWN</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <code>{{ user }}</code>
      </v-col>
      <v-col>
        <v-select v-model="user" :items="['alice', 'bob']" label="ユーザー"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <code>{{ $store.getters['sandbox/color'] }}</code>
      </v-col>
      <v-col>
        <v-select
          label="色"
          :items="['red', 'blue']"
          :value="$store.getters['sandbox/color']"
          @input="$store.dispatch('sandbox/color', $event)"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <code>{{ $store.getters }}</code>
      </v-col>
      <v-col>
        <moneta-menu-button to="/sandbox">中央へ</moneta-menu-button>
        <moneta-menu-button to="/sandbox/down">下へ</moneta-menu-button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import menuButton from "~/components/ui/moneta-menu-button";

export default {
  layout: "admin",
  data: () => ({
    index: 1,
    user: "no data",
  }),
  computed: {
    direction() {
      return ["up", "down"][this.index];
    },
  },
  components: { menuButton },
};
</script>
