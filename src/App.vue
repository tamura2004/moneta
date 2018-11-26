<template lang="pug">
  router-view
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/views/Menu';

@Component({
  components: { Menu },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
  .v-btn.menu
    height 60px
    font-size 32px
</style>