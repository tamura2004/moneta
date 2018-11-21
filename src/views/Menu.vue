<template lang="pug">
    v-container(grid-list-md text-xs-center)
        v-layout(row wrap)
            v-flex(md4 offset-md4)
                router-link(to="/balance")
                    v-btn.menu.my-4(round dark block large color="primary") 残高照会
                v-btn.menu.my-4(round dark block large color="primary") 入出金明細
                v-btn.menu.my-4(round dark block large color="primary") 振込
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      //
    };
  },
};
</script>

<style lang="stylus">
  .v-btn.menu
    height 60px
    font-size 32px
</style>