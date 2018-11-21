<template lang="pug">
    v-container(grid-list-md text-xs-center)
        v-layout(row wrap)
            v-flex(md4 offset-md4)
                v-btn.menu.my-4(round dark block large color="primary") 残高
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
export default class Balance extends Vue {}
</script>