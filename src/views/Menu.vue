<template lang="pug">
  div
    BaseMenuButton(
      v-for="menu in menues"
      :to="menu.to"
      :label="menu.label"
      :key="menu.label"
    )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseMenuButton from '@/components/BaseMenuButton.vue';
import { DB } from '@/plugins/firebase';

@Component({
  components: {
    BaseMenuButton,
  },
})
export default class Menu extends Vue {
  private menues = [
    {to: '/balance', label: '残高照会'},
    {to: '/statements', label: '入出金明細'},
    {to: '/transfer/bank', label: '振込'},
  ];
}
</script>

<style lang="stylus" scoped>
</style>