<template lang="pug">
  v-app
    v-toolbar(app fixed)
      v-btn(flat icon @click="home")
        v-icon home
      v-toolbar-title(v-if="account")
        p.body-2.my-0 {{ bank.name }}
        p.body-1.my-0 {{ branch.name }}
      v-spacer.debug
      TheUserInfo(:account="account")
    v-content
      v-container(fluid)
        v-layout(align-start justify-center v-if="!processing")
          v-flex(xs12 sm12 md8 lg8 x8)
            transition(name="router" mode="out-in")
              router-view
        v-layout(align-center justify-center fill-height v-else)
          v-progress-circular.mt-5(:size="100" color="primary" indeterminate)
    v-footer(app)
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import BaseState from '@/store/BaseState';
import TheUserInfo from '@/components/TheUserInfo.vue';

@Component({
  components: {
    TheUserInfo,
  },
  computed: {
    ...mapGetters('session', ['account', 'bank', 'branch']),
    ...mapState('session', ['processing']),
  },
})
export default class App extends Vue {
  private home(): void {
    this.$router.push('/');
  }
}
</script>

<style lang="stylus">
  // .debug
  //   border 1px solid red

  // *
  //   border 1px solid black

  .router-enter-active, .router-leave-active
    transition all 0.3s ease

  .router-enter
    transform translateX(90%)

  .router-leave-active
    transform translateX(-90%)
</style>