<template>
  <div>
    <h1 class="display-2">グラフの例</h1>
    <moneta-sandbox-chart :data="nodes"></moneta-sandbox-chart>
    <a href="https://www.chartjs.org/docs/latest/">https://www.chartjs.org/docs/latest</a>
    <moneta-menu-button to="/sandbox">戻る</moneta-menu-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import menuButton from "~/components/ui/moneta-menu-button";

export default {
  components: {
    chart,
    menuButton,
  },
  layout: "admin",
  data: () => ({
    nodes: {
      labels: ["1月", "2月", "3月", "4月"],
      datasets: [
        {
          label: "BarDataset",
          data: [10, 30 ,20, 25],
        }
      ]
    }
  }),
  computed: mapGetters("accounts", ["collection"]),
  created() {
    this.nodes.labels = this.collection.map(a => a.name);
    this.nodes.datasets[0].data = this.collection.map(a => a.total);
  },
}
</script>
