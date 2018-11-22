<template lang="pug">
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