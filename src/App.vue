<template lang="pug">
  v-app
    v-toolbar(app fixed)
      v-btn(flat icon @click="home")
        v-icon home
      v-toolbar-title(v-if="account")
        p.body-2.my-0 {{ account.bankName }}
        p.body-1.my-0 {{ account.branchName }}
      v-spacer
      TheUserInfo
    v-content
      v-container(fluid)
        v-layout(align-start justify-center v-if="!progress")
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
import State from '@/models/State';
import TheUserInfo from '@/components/TheUserInfo.vue';

@Component({
  components: {
    TheUserInfo,
  },
  computed: {
    ...mapState(['progress']),
    ...mapGetters(['account']),
  },
})
export default class App extends Vue {
  private home(): void {
    this.$router.push('/');
  }

// private get account(): Account | undefined {
  //   return this.$store.getters.account;
  // }
  // private get progress(): boolean {
  //   return this.$store.state.progress;
  // }

}
</script>

<style lang="stylus">
  .router-enter-active, .router-leave-active
    transition all 0.3s ease

  .router-enter
    transform translateX(100%)

  .router-leave-active
    transform translateX(-100%)
</style>