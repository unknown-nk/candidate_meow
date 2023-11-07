<template>
    <header class="w-full h-[80px] z-40 grid grid-cols-4 text-white">
      <h1 class="z-50 col-span-1">
        <p
          class="h-full pl-[90px] text-lg font-bold leading-normal flex items-center"
        >
          Dessert Town
        </p>
      </h1>
      <div class="z-50 self-center col-span-2 col-start-3 place-self-end">
        <ul class="flex">
          <li class="px-2"><i></i>會員登入</li>
          <li class="px-2"><i></i>關於我們</li>
        </ul>
      </div>
      <div class="absolute w-full h-full bg-black opacity-60"></div>
    </header>
  </template>
  <script setup lang="ts">
  </script>
  <style lang="scss" scoped>
  h1 {
    background-image: url("../assets/img/logo.svg");
    background-size: 120%;
    background-position-y: center;
    width: 80px;
    height: 80px;
  }
  </style>