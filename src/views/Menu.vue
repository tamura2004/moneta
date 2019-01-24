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


@Component({
  components: {
    MenuButton,
    UserInfo,
  },
})
export default class Menu extends Vue {
  private menues = [
    {to: '/balance', label: '残高照会'},
    {to: '/statements', label: '入出金明細'},
    {to: '/transfer', label: '振込'},
  ];
}
</script>
