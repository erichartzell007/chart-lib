<script setup>
import { fetchChartsData } from "@/store/chartsSlice";

const props = defineProps({
  width: String,
});

const chartsData = fetchChartsData();
</script>

<template>
  <div
    class="px-5 py-4 rounded-xl w-full bg-white dark:bg-gray-900"
    :class="props.width ? props.width : 'w-full'"
    :style="{
      boxShadow: '0 0 2px 0px rgba(0,0,0,0.2)',
    }"
  >
    <CustomLoader v-if="chartsData.loading" />

    <p v-else-if="chartsData.isError" class="text-center text-red-500">
      {{ chartsData.isError }}
    </p>

    <slot v-else></slot>
  </div>
</template>
