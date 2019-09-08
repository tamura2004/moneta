<template>
  <div>
    <h1 class="display-4">ここは中央です</h1>
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
        <menu-button @click="up">上へ</menu-button>
        <menu-button @click="down">下へ</menu-button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import menuButton from "~/components/ui/menu-button";

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
  methods: {
    up() {
      alert("上に移動します");
      this.$router.push("/sandbox/up");
    },
    down() {
      alert("下に移動します");
      this.$router.push("/sandbox/down");
    },
  },
  components: { menuButton },
};
</script>
