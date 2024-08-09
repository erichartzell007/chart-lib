<script setup>
import { ArrowTrendingUpIcon } from "@heroicons/vue/24/solid";
import getRandomValue from "@/utils/getRandomValue";
</script>

<template>
  <div class="space-y-3">
    <div class="flex items-center">
      <div
        class="min-w-[36px] h-9 rounded-xl flex justify-center items-center"
        style="box-shadow: 0 0 12px 15px #4c4639 inset"
      >
        <div class="w-5 h-5">
          <svg
            enable-background="new 0 0 1024 1024"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="512" cy="512" fill="#f3ba2f" r="512" />
            <g fill="#fff">
              <path
                d="m404.9 468 107.1-107.1 107.1 107.2 62.3-62.3-169.4-169.5-169.4 169.4z"
              />
              <path
                d="m254.6 467.9h88.1v88.1h-88.1z"
                transform="matrix(.7071 -.7071 .7071 .7071 -274.5652 361.1246)"
              />
              <path
                d="m404.9 556 107.1 107.1 107.1-107.2 62.4 62.3h-.1l-169.4 169.5-169.4-169.4-.1-.1z"
              />
              <path
                d="m681.3 468h88.1v88.1h-88.1z"
                transform="matrix(.7071 -.7071 .7071 .7071 -149.5987 662.8792)"
              />
              <path
                d="m575.2 512-63.2-63.3-46.7 46.8-5.4 5.3-11.1 11.1-.1.1.1.1 63.2 63.2z"
              />
            </g>
          </svg>
        </div>
      </div>

      <div class="ml-3 text-light-primary dark:text-white">Bitcoin</div>
      <div class="ml-auto uppercase text-secondary">btc</div>
    </div>

    <div class="flex justify-between items-center">
      <p class="text-light-primary dark:text-white font-bold">
        ${{ getRandomValue("double", 500) }}
      </p>
      <div class="flex text-green-500 text-sm gap-x-1.5 font-semibold">
        <ArrowTrendingUpIcon class="w-5" />
        <p>2.0%</p>
      </div>
    </div>
  </div>
</template>
