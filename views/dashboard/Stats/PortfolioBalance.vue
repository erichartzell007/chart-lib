<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { ArrowTrendingUpIcon } from "@heroicons/vue/24/solid";

import * as chartConfig from "@/data/lineChartConfig";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default {
  name: "PortfolioBalanceChart",
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
  <div class="space-y-5 md:space-y-2">
    <div
      class="flex flex-col sm:flex-row gap-y-4 md:justify-between md:items-center"
    >
      <div class="space-y-2">
        <p class="text-[#67686D] font-semibold">Portfolio Balance</p>
        <div class="flex flex-col md:flex-row gap-2">
          <p class="text-3xl font-bold text-light-primary dark:text-white">
            $380.5672.00
          </p>
          <div
            class="text-green-500 md:mt-3.5 text-sm font-semibold gap-x-1 flex"
          >
            <ArrowTrendingUpIcon class="w-5" />
            <p>2.0%</p>
          </div>
        </div>
      </div>
      <div
        class="py-1.5 flex self-center ml-auto bg-[#EFF6FF] dark:bg-[#333A44] gap-3 px-2 justify-between md:justify-start font-semibold text-light-primary dark:text-white rounded-xl text-sm"
      >
        <div class="bg-[#2E73E4] cursor-pointer px-4 py-1.5 rounded-2xl">
          Year
        </div>
        <div class="bg-[#2E73E4] cursor-pointer px-4 py-1.5 rounded-2xl">
          Month
        </div>
        <div class="bg-[#2E73E4] cursor-pointer px-4 py-1.5 rounded-2xl">
          Week
        </div>
      </div>
    </div>

    <div class="h-[210px]">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>
