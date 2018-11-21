<template lang="pug">
  v-container(grid-list-md text-xs-center)
    v-layout(row wrap)
      v-flex(
        xs6 offset-xs3
        sm4 offset-sm4
        md4 offset-md4
        lg3 offset-lg5
        xl3 offset-xl5
      )
        router-link(to="/balance")
          v-btn.menu.my-4(round dark block large color="primary") 残高照会
        v-btn.menu.my-4(round dark block large color="primary") 入出金明細
        v-btn.menu.my-4(round dark block large color="primary") 振込
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class Menu extends Vue {}
</script>

<style lang="stylus">
  .v-btn.menu
    height 60px
    font-size 32px
</style>