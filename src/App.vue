<template lang="pug">
  v-app
    v-toolbar(app)
      v-toolbar-title.headline
        span MONETA BANK
      v-spacer
      v-btn(flat)
        span.mr-2 login:モネタ太郎様
    v-content
      router-view
</template>

<script>
import Menu from '@/views/Menu';

export default {
  name: 'App',
  components: {
    Menu,
  },
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