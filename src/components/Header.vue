<template>
  <!-- 頁首 -->
  <header>
    <div class="h-[60px] pad:h-[127px] flex justify-center items-center z-50 relative">
      <div class="w-full h-full border-solid border-b-2 border-primary bg-background-color z-40 absolute"></div>
      <!-- logo -->
      <div class="absolute top-[15px] pad:top-5 z-50">
        <a href="./">
          <img
            src="/images/main-logo.svg"
            alt="logo"
            class="w-[85px] h-[85px] pad:h-full pad:w-full border-solid border-2 pad:border-4 border-primary rounded-full shadow-2xl"
          />
        </a>
      </div>
      <!-- 手機選單 -->
      <div class="h-full pad:hidden absolute left-8 z-40 flex items-center">
        <!-- bar -->
        <div class="cursor-pointer absolute" :class="{ 'hidden-bar': showBar }" @click="barSwitch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 text-primary hover:text-primary-hover"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <!-- close -->
        <div class="cursor-pointer absolute" :class="{ 'hidden-bar': !showBar }" @click="barSwitch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 text-primary hover:text-primary-hover"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div
        class="w-full h-screen bg-white absolute z-30 top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out pad:hidden"
        :class="{ 'opacity-100': showBar, 'h-0 overflow-hidden': !showBar }"
      >
        <div
          class="w-full absolute z-50 top-40 flex flex-col justify-center items-center font-jost font-bold text-lg text-sub-primary px-8"
        >
          <div class="mb-[54px]"><a href="#about" class="hover:text-sub-primary-hover">About Me</a></div>
          <div class="mb-[54px]"><a href="" class="hover:text-sub-primary-hover">Last Activity</a></div>
          <div class="mb-[54px]"><a href="" class="hover:text-sub-primary-hover">Policy</a></div>
          <div class="mb-[54px]"><a href="" class="hover:text-sub-primary-hover">Donate</a></div>
          <div class="mb-[54px]">
            <a href="" class="hover:text-sub-primary-hover">Feedback</a>
          </div>
          <div class="w-full border-t border-line-color flex justify-center">
            <div class="row-span-2 flex mt-[50px]">
              <div
                class="w-[80px] h-[80px] rounded-full border border-disabled-color flex justify-center items-center mr-7"
              >
                <img src="/images/img/facebook-1.svg" alt="" />
              </div>
              <div
                class="w-[80px] h-[80px] rounded-full border border-disabled-color flex justify-center items-center mr-7"
              >
                <img src="/images/img/ig-1.svg" alt="" />
              </div>
              <div
                class="w-[80px] h-[80px] rounded-full border border-disabled-color flex justify-center items-center mr-7"
              >
                <img src="/images/img/line-1.svg" alt="" />
              </div>
              <div class="w-[80px] h-[80px] rounded-full border border-disabled-color flex justify-center items-center">
                <img src="/images/img/youtube-1.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 桌面選單 -->
      <div
        class="hidden pad:w-[1420px] h-full pad:grid grid-cols-7 items-center justify-items-center font-jost font-bold text-sub-primary z-40"
      >
        <div><a href="" class="hover:text-sub-primary-hover">About Me</a></div>
        <div><a href="" class="hover:text-sub-primary-hover">Last Activity</a></div>
        <div><a href="" class="hover:text-sub-primary-hover">Policy</a></div>
        <div></div>
        <div><a href="" class="hover:text-sub-primary-hover">Donate</a></div>
        <div><a href="" class="hover:text-sub-primary-hover">Feedback</a></div>
        <div class="flex flex-shrink-0">
          <a href="http://" class="mr-6">
            <img src="/images/img/facebook.svg" alt="" />
          </a>
          <a href="http://" class="mr-6">
            <img src="/images/img/ig.svg" alt="" />
          </a>
          <a href="http://" class="mr-6">
            <img src="/images/img/line.svg" alt="" />
          </a>
          <a href="http://">
            <img src="/images/img/youtube.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const showBar = ref(false)

const barSwitch = () => {
  showBar.value = !showBar.value
}
</script>
<style lang="scss" scoped>
.hidden-bar {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>
