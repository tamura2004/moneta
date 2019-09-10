<template>
  <div>
    <h1 class="display-2">グラフの例</h1>
    <chart :data="data"></chart>
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
  },
  layout: "admin",
  data: () => ({
    data: {
      labels: ["1月", "2月", "3月", "4月"],
      datasets: [
        {
          label: "BarDataset",
          data: [10, 30 ,20, 25],
        }
      ]
    }
  }),
}
</script>
