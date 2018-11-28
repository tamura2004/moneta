<template lang="pug">
  LeafPageToolbar
    v-content
      v-container(grid-list-md text-xs-center)
      v-layout
        v-flex(md4 offset-md4): v-btn.menu.my-4(round dark block large color="primary") 振込
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LeafPageToolbar from '@/components/LeafPageToolbar.vue';

@Component({
  components: {
    LeafPageToolbar,
  },
})
export default class Transfer extends Vue {}
</script>