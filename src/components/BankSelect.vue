<template lang="pug">
  div
    v-select(
      prepend-icon="business"
      :items="banks"
      item-text="name"
      item-value="id"
      v-model="value"
      @input="$emit('input', $event.target.value)"
    )
    p.red--text(v-if="error") 銀行を選択して下さい
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Bank } from '@/models/Bank';

@Component
export default class BankSelect extends Vue {
  @Prop() private value!: string;
  private error: boolean = false;

  get banks(): Bank[] {
    return this.$store.state.banks;
  }
}
</script>

<style lang="stylus">
</style>
