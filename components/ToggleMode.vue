<script setup>
import { MoonIcon, SunIcon } from "@heroicons/vue/24/solid";

const toggleMode = (event) => {
  document.documentElement.classList.toggle("dark");
};
</script>
<template>
  <SunIcon @click="toggleMode" class="dark:block hidden w-5 h-5" />
  <MoonIcon @click="toggleMode" class="dark:hidden w-5 h-5" />
</template>
