<template>
  <!-- 頁首 -->
  <header>
    <div class="h-[127px] border-solid border-b-2 border-primary bg-background-color flex justify-center z-50">
      <div class="absolute">
        <a href="/">
          <img
            src="/images/main-logo.svg"
            alt="logo"
            class="mt-5 border-solid border-4 border-primary rounded-full shadow-2xl"
          />
        </a>
      </div>
      <div
        class="w-[1420px] h-full grid grid-cols-7 items-center justify-items-center font-jost font-bold text-sub-primary"
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
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
