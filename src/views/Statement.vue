<template lang="pug">
    v-container(grid-list-md text-xs-center)
        v-layout(row wrap)
            v-flex(md4 offset-md4)
                v-btn.menu.my-4(round dark block large color="primary") 入出金明細
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Statement extends Vue {}
</script>