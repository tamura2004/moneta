<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({
    data: {
      labels: ["1月", "2月", "3月"],
      datasets: [
        {
          label: "BarDataset",
          data: [10, 30 ,20],
        }
      ]
    }
  }),
  mounted() {
    this.renderChart(this.data, {});
  }
};
</script>
