<script setup>
import { ref } from "vue";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "vue-chartjs";

import getRandomValue from "@/utils/getRandomValue";
import { fetchChartsData } from "@/store/chartsSlice";

ChartJS.register(ArcElement);
const chartsData = fetchChartsData();
const data = chartsData.chartsData.monthlyProfitsChart;

const info = data.data.labels.map((label, index) => {
  return {
    label,
    backgroundColor: data.data.datasets[0].backgroundColor[index],
    amount: getRandomValue("double", 500),
  };
});
console.log(info);
console.log(data);
</script>

<template>
  <div class="flex flex-col gap-y-3 md:flex-row">
    <div
      class="flex text-light-primary dark:text-white flex-col gap-5 md:basis-[180px]"
    >
      <p class="font-semibold text-lg">Monthly Profits</p>
      <div
        v-for="item in info"
        class="flex items-center md:items-start gap-2 font-medium"
      >
        <div
          class="w-3.5 h-3.5 rounded-full"
          :style="{ backgroundColor: item.backgroundColor }"
        ></div>
        <div class="flex flex-row md:flex-col gap-x-3">
          <p>{{ item.label }}</p>
          <p class="font-semibold">${{ item.amount }}</p>
        </div>
      </div>
    </div>

    <div class="flex-grow relative flex justify-center items-center">
      <div
        class="absolute w-[75%] h-[75%] rounded-full flex-col flex items-center justify-center"
      >
        <p class="text-sm text-secondary">Total Balance</p>
        <p
          class="font-bold text-light-primary dark:text-white text-lg md:text-2xl"
        >
          ${{ getRandomValue("double", 500) }}
        </p>
      </div>
      <Doughnut style="width: 0" :data="data.data" :options="data.options" />
    </div>
  </div>
</template>
