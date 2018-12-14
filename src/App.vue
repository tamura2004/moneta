<template lang="pug">
  v-app
    transition(name="router" mode="out-in")
      router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/views/Menu.vue';

@Component({
  components: { Menu },
})
export default class App extends Vue {
  private mounted(): void {
    this.$store.dispatch('init');
  }
}
</script>

<style lang="stylus">
  .router-enter-active, .router-leave-active
    transition all 0.3s ease
  
  .router-enter
    transform translateX(100%)
    // opacity 0
  
  .router-leave-active
    // opacity 0
    transform translateX(-100%)
</style>