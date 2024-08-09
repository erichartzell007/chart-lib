<script setup>
definePageMeta({
  middleware: "auth",
});
import { onMounted } from "vue";
import SideNav from "@/views/dashboard/Sidenav.vue";
import Sidebar from "@/views/dashboard/Sidebar.vue";
import Stats from "@/views/dashboard/Stats.vue";
import Messages from "@/views/dashboard/Messages/Messages.vue";
import { fetchChartsData } from "@/store/chartsSlice";
const chartsData = fetchChartsData();
const componentsToRender = [Stats, Messages, Stats, Messages, Stats];
const currentIndex = ref(0);

const getCurrentIndex = (index) => {
  if (index >= componentsToRender.length) {
    currentIndex.value = 0;
    return;
  }
  currentIndex.value = index;
};

onMounted(() => {
  chartsData.fetchData();
});

document?.documentElement?.classList?.add("dark");
</script>

<template>
  <main class="flex flex-col lg:flex-row bg-[#111315] justify-center">
    <SideNav :getCurrentIndex="getCurrentIndex" />

    <section
      class="max-w-[1200px] flex-grow bg-[#FAFAFA] dark:bg-[#111315] space-y-3"
    >
      <div class="xl:hidden bg-gray-900 flex items-center px-2 justify-between">
        <div class="w-14 h-14 flex items-center">
          <CurrencyDollarIcon class="w-8 text-[#2E73E4]" />
        </div>
        <div class="flex text-[#919295]">
          <div
            style="transition: all 0.5s"
            class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
          >
            <Squares2X2Icon
              style="transition: all 0.5s"
              class="w-6 h-6 group-hover:text-[#2E73E4]"
            />
          </div>
          <div
            style="transition: all 0.5s"
            class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
          >
            <Squares2X2Icon
              style="transition: all 0.5s"
              class="w-6 h-6 group-hover:text-[#2E73E4]"
            />
          </div>
          <div
            style="transition: all 0.5s"
            class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
          >
            <Squares2X2Icon
              style="transition: all 0.5s"
              class="w-6 h-6 group-hover:text-[#2E73E4]"
            />
          </div>
          <div
            style="transition: all 0.5s"
            class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
          >
            <Squares2X2Icon
              style="transition: all 0.5s"
              class="w-6 h-6 group-hover:text-[#2E73E4]"
            />
          </div>
          <div
            style="transition: all 0.5s"
            class="hover:bg-[#EFF6FF] dark:hover:bg-[#333A44] cursor-pointer group w-12 h-12 flex items-center justify-center rounded-lg"
          >
            <Squares2X2Icon
              style="transition: all 0.5s"
              class="w-6 h-6 group-hover:text-[#2E73E4]"
            />
          </div>
        </div>
        <div class="flex gap-x-3 text-[#919295]">
          <div>
            <Cog6ToothIcon class="h-6 w-6 cursor-pointer" />
          </div>
          <div>
            <QuestionMarkCircleIcon class="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>

      <section class="px-4 md:px-6 pt-5 space-y-7">
        <component :is="componentsToRender[currentIndex]"></component>
      </section>
    </section>

    <Sidebar />
  </main>
</template>
