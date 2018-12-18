<template lang="pug">
  div
    MenuButton(v-for="menu in menues" :to="menu.to" :label="menu.label")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuButton from '@/components/MenuButton.vue';
import UserInfo from '@/components/UserInfo.vue';

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
    {to: '/selectBank', label: '振込'},
  ];

  private get bank(): string {
    return this.$store.state.bank.name;
  }

  private get branch(): string {
    return this.$store.state.branch.name;
  }
}
</script>
