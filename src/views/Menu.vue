<template lang="pug">
  div
    MenuButton(
      v-for="menu in menues"
      :to="menu.to"
      :label="menu.label"
      :key="menu.label"
    )
    h1(v-for="bank in banks") {{ bank.name }}
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
  private banks = [];

  private created(): void {
    this.$bind('banks', DB.collection('banks'));
  }

  private get bank(): string {
    return this.$store.state.bank.name;
  }

  private get branch(): string {
    return this.$store.state.branch.name;
  }
}
</script>
