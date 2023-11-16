<template>
  <!-- banner -->
  <div class="w-screen h-full pad:max-h-[778px] flex justify-center items-center relative">
    <div class="h-full flex justify-center items-center">
      <div class="w-full h-[85%] pad:h-[70%] desktop:w-[1420px] absolute px-9 pad:px-28 desktop:px-0">
        <p
          class="text-center pad:text-start text-[40px] plus:text-[60px] mid:text-[80px] desktop:text-[100px] font-extrabold desktop:leading-[150px] text-sub-primary tracking-[.3em]"
        >
          台灣的明天，<br />喵先鋪路
        </p>
      </div>
      <div class="w-full h-full relative -z-50 flex justify-center">
        <img src="/images/img/banner.png" alt="" class="hidden pad:block" />
        <img src="/images/img/banner/mobile-banner.png" alt="" class="block pad:hidden" />

        <div class="z-30 absolute h-full top-[82%] pad:top-[70%] left-[8%]">
          <span><img src="/images/img/fish.svg" alt="" /></span>
          <span><img src="/images/img/fish.svg" alt="" class="w-24 absolute left-[100%]" /></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
