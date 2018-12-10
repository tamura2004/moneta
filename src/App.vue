<template lang="pug">
  transition(name="router")
    router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/views/Menu.vue';

@Component({
  components: { Menu },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
  .router-enter-active, .router-leave-active
    transition all 0.5s ease
  
  .router-enter
    transform translateX(100%)
  
  .router-leave-active
    transform translateX(-100%)
</style>