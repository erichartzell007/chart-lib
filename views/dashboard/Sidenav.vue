<script setup>
import { provide, defineEmits } from "vue";
import {
  Cog6ToothIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  QuestionMarkCircleIcon,
  ChartPieIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  CurrencyDollarIcon,
} from "@heroicons/vue/24/outline";
import { Square2StackIcon } from "@heroicons/vue/24/solid";

const commonSpace = "space-y-6";

const currentIndex = ref(0);
const renderNextComponent = (index) => {
  currentIndex.value = index;
  props.getCurrentIndex(currentIndex.value);
};

const props = defineProps({
  device: String,
  getCurrentIndex: Function,
});

const iconsArray = [
  { name: "", icon: Squares2X2Icon },
  { name: "", icon: ChatBubbleOvalLeftEllipsisIcon },
  { name: "", icon: ShoppingBagIcon },
  { name: "", icon: ChartPieIcon },
  { name: "", icon: CalendarDaysIcon },
];
</script>

<template>
  <section
    class="min-w-[70px] bg-white dark:bg-gray-900 xl:flex flex-col items-center py-5"
  >
    <div class="w-14 h-10 flex justify-center">
      <CurrencyDollarIcon class="w-8 text-[#2E73E4]" />
    </div>

    <div :class="['mt-10 text-[#8B8CAA] dark:text-[#D3D4DF]', commonSpace]">
      <div
        v-for="(icon, index) in iconsArray"
        style="transition: all 0.5s"
        @click="renderNextComponent(index)"
        class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
      >
        <component
          :is="icon.icon"
          style="transition: all 0.5s"
          class="w-6 h-6 group-hover:text-[#2E73E4]"
        ></component>
      </div>
    </div>

    <div
      :class="[
        'flex flex-col text-[#8B8CAA] dark:text-[#D3D4DF] items-center mt-auto',
        commonSpace,
      ]"
    >
      <div>
        <Cog6ToothIcon class="h-6 w-6 cursor-pointer" />
      </div>
      <div>
        <QuestionMarkCircleIcon class="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  </section>
</template>
