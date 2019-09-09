<template>
  <div>
    <h1 class="display-2">グラフの例</h1>
    <chart></chart>
    <a href="https://www.chartjs.org/docs/latest/">https://www.chartjs.org/docs/latest</a>
    <menu-button to="/sandbox">戻る</menu-button>
  </div>
</template>

<script>
import chart from "~/components/pages/sandbox/chart";
import menuButton from "~/components/ui/menu-button";

export default {
  components: {
    chart,
    menuButton,
  }
}
</script>
