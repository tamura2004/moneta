<template lang="pug">
  div
    //- Tenkey(v-model="num")
    v-container(grid-list-lg fluid)
      v-layout(row wrap)
        v-flex(v-for="n in 12" :key="n" xs6 sm3)
          v-card(hover)
            v-card-title
              v-icon.mr-2 people
              .body-1 パネル{{ n }}
            v-divider
            v-card-text
              v-layout
                v-flex.py-0(xs3)
                  .caption.font-weight-bold Qt.
                v-flex.py-0(xs9)
                  .caption 120
              v-layout
                v-flex.py-0(xs3)
                  .caption.font-weight-bold Qt.
                v-flex.py-0(xs9)
                  .caption 120
              v-layout
                v-flex.py-0(xs3)
                  .caption.font-weight-bold Qt.
                v-flex.py-0(xs9)
                  .caption 120
              v-layout
                v-flex.py-0(xs3)
                  .caption.font-weight-bold Qt.
                v-flex.py-0(xs9)
                  .caption 120
            v-divider
            v-card-actions.py-0
              v-spacer
              v-btn.btn(small fab flat) OK
              v-btn.btn(small fab flat) NG
    MenuButton(
      v-for="menu in menues"
      :to="menu.to"
      :label="menu.label"
      :key="menu.label"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';
import UserInfo from '@/components/UserInfo.vue';
import { DB } from '@/plugins/firebase';
import Tenkey from '@/components/Tenkey.vue';

@Component({
  components: {
    MenuButton,
    UserInfo,
    Tenkey,
  },
})
export default class Menu extends Vue {
  private num: number = 90;
  private menues = [
    {to: '/balance', label: '残高照会'},
    {to: '/statements', label: '入出金明細'},
    {to: '/transfer', label: '振込'},
  ];
}
</script>

<style lang="stylus" scoped>
</style>