<template>
  <div>
    <div class="flex justify-between mb-4">
      <h1 class="font-semibold text-xl text-light-primary dark:text-white">
        My Portfolio
      </h1>
      <div>dots</div>
    </div>

    <table class="overflow-scroll whitespace-nowrap w-full">
      <tr class="text-left text-[#777b89] text-sm font-medium">
        <th class="">Coin</th>
        <th class="">Last Price</th>
        <th class=""></th>
        <th class="">24 Change</th>
        <th class="">Market</th>
        <th class=""></th>
      </tr>

      <tr class="h-[70px]" v-for="list in [1, 2, 3, 4, 5, 6, 7, 8]">
        <td class="">
          <div
            class="flex font-semibold text-light-primary dark:text-white gap-x-3 items-center"
          >
            <div
              class="min-w-[44px] h-11 rounded-xl flex justify-center items-center"
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
            <p>Bitcoin</p>
          </div>
        </td>

        <td class="font-bold text-light-primary dark:text-white">$34,459.81</td>

        <td class="">
          <div class="text-[#7534A9] flex gap-x-1.5 font-medium">
            <div>ic</div>
            <p>25%</p>
          </div>
        </td>

        <td class="text-[#72749A] font-semibold">$646,224,737,128.21</td>

        <td class="">chart</td>

        <td class="">
          <div
            class="font-semibold rounded-xl bg-[#333A44] text-light-primary dark:text-white py-2 text-center"
          >
            Trade
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
