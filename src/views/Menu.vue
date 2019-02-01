<template lang="pug">
  div
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