<template>
  <div id="page">
    <div id="inner-page">
      <h2 id="label">
        残高
      </h2>
      <h2 id="account">{{ account | kind }}預金 {{ account | num }}</h2>
      <v-btn
        id="statement-btn"
        nuxt
        to="/statements"
        class="mx-3"
        rounded
        large
        color="white"
      >
        明細
      </v-btn>
    </div>
    <v-btn id="btn" class="ma-0 orange" fab dark large>
      {{ account | yen }}
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "login",
  computed: {
    ...mapGetters("login", ["account"]),
  },
};
</script>

<style scoped>
#page {
  display: grid;
  grid-template-rows: 320px 1fr;
  grid-template-columns: 1fr 320px 1fr;
}

#btn {
  grid-row: 1;
  grid-column: 2;
  font-size: 48px;
  height: 320px;
  width: 320px;
  z-index: 1;
}

#under {
  grid-row: 2;
  grid-column: 2;
  margin: auto;
}

#inner-page {
  grid-row: 1;
  grid-column: 2;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: 1fr 200px 1fr;
  z-index: 2;
}

#label {
  grid-row: 2;
  grid-column: 2;
  color: white;
  z-index: 3;
  text-align: center;
}

#account {
  grid-row: 3;
  grid-column: 2;
  color: white;
  z-index: 4;
  text-align: center;
  font-size: 16px;
}

#statement-btn {
  grid-row: 8;
  grid-column: 2;
  font-size: 24px;
  color: orange;
  text-decoration: none;
  z-index: 5;
}
</style>
