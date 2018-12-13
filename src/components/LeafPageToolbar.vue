<template lang="pug">
  v-app
    v-toolbar(app)
      v-toolbar-title.headline
        v-btn(flat icon x-large @click="back")
          v-icon arrow_back
          span 戻る
      v-spacer
      UserInfo
    v-content
      v-container(fluid fill-height)
        v-layout(align-start justify-center)
          slot
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import UserInfo from '@/components/UserInfo.vue';

@Component({
  components: {
    UserInfo,
  },
})
export default class LeafPageToolbar extends Vue {
  private back(): void {
    this.$router.push('/');
  }
}
</script>