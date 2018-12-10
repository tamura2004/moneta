<template lang="pug">
  v-app
    v-toolbar(app)
      //- v-toolbar-side-icon
      v-icon home
      v-toolbar-title.headline
        span MONETA BANK
      v-spacer
      UserInfo
    v-content
      v-container(text-xs-center)
        v-layout(row wrap)
          v-flex(
            xs6 offset-xs3
            sm4 offset-sm4
            md4 offset-md4
            lg3 offset-lg5
            xl3 offset-xl5
          )
            MenuButton(to="/balance" label="残高照会")
            MenuButton(to="/statements" label="入出金明細")
            MenuButton(to="/transfer" label="振込")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';
import UserInfo from '@/components/UserInfo.vue';

@Component({
  components: {
    MenuButton,
    UserInfo,
  },
})
export default class Menu extends Vue {}
</script>
