<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "vue-chartjs";
import * as chartConfig from "@/data/mediumCardChart";
import { ArrowTrendingUpIcon } from "@heroicons/vue/24/solid";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default {
  name: "MediumCardChart",
  components: {
    Line,
    ArrowTrendingUpIcon,
  },
  data() {
    return chartConfig;
  },
};
</script>

<template>
  <div class="space-y-2">
    <div class="text-[#67686D] flex justify-between">
      <div>New user this week</div>
      <div>dots</div>
    </div>
    <div class="flex justify-between flex-col md:flex-row gap-y-2">
      <div class="flex md:flex-col flex-row gap-x-3 items-center">
        <p class="text-light-primary dark:text-white font-bold text-xl">
          $81.66
        </p>
        <div class="font-semibold text-sm text-green-500 md:mt-7 flex gap-x-1">
          <ArrowTrendingUpIcon class="w-5" />
          <p>2.0%</p>
        </div>
      </div>

      <div class="mx-auto md:mx-0 w-[60%] h-[85px]">
        <Line :data="data" :options="options" />
      </div>
    </div>
  </div>
</template>
