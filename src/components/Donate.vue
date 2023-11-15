<template>
  <!-- 捐款 -->
  <div class="h-[80vh] flex flex-col justify-center items-center">
    <div class="text-center mb-12">
      <span class="font-jost text-primary text-[30px]">Donate</span>
      <p class="text-[80px] text-sub-primary font-extrabold tracking-[.28em] mb-7">捐款方案</p>
      <!-- NOTE:千分位套件 -->
      <p>
        <span class="text-[30px] tracking-[.24em] text-text-color mr-4">累計</span
        ><span class="text-[50px] text-primary font-extrabold font-jost">100,000,000</span>
      </p>
    </div>

    <div class="w-[1920px] h-[734px] relative">
      <div
        class="absolute z-40 swiper-button-prev w-20 h-20 bg-white rounded-full flex justify-center items-center top-1/2 -translate-y-1/2 left-[60px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-auto h-[39px] text-primary hover:text-primary-hover"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div
        class="absolute z-40 swiper-button-next w-20 h-20 bg-white rounded-full flex justify-center items-center top-1/2 -translate-y-1/2 right-[60px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-auto h-[39px] text-primary hover:text-primary-hover"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>

      <swiper
        :direction="'horizontal'"
        :slidesPerView="1"
        :loop="true"
        :spaceBetween="20"
        :mousewheel="true"
        :pagination="false"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :modules="modules"
        class="mySwiper w-full h-full z-30"
      >
        <!-- 1 -->
        <swiper-slide>
          <div class="h-full">
            <div class="w-full h-full relative">
              <div
                class="absolute right-[250px] bottom-[45px] w-[452px] h-[322px] bg-white rounded-lg z-30 px-[50px] py-[30px] bg-opacity-70"
              >
                <p class="text-[40px] text-sub-primary font-extrabold tracking-[.26em] mb-[18px]">喵星人之友</p>
                <p class="flex items-center mb-1">
                  <span class="text-lg tracking-[.24em] mr-4">捐款新台幣</span
                  ><span class="font-jost text-primary text-[30px] font-bold tracking-[.06em]">NT$ 600</span>
                </p>
                <p class="text-text-color tracking-[.06em] mb-9">已有 9,957 人贊助</p>
                <button
                  class="w-full h-[60px] bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded tracking-[.24em]"
                >
                  前往捐款
                </button>
              </div>
              <img src="/images/img/donate/mask.png" alt="" class="absolute z-20" />
              <img src="/images/img/donate/donate1.png" alt="" class="absolute z-10" />
            </div>
          </div>
        </swiper-slide>
        <!-- 2 -->
        <swiper-slide>
          <div class="h-full">
            <div class="w-[1920px] h-[734px] relative overflow-hidden">
              <div
                class="absolute right-[250px] bottom-[45px] w-[452px] h-[322px] rounded-lg bg-white z-30 px-[50px] py-[30px] bg-opacity-70"
              >
                <p class="text-[40px] text-sub-primary font-extrabold tracking-[.26em] mb-[18px]">喵星大使</p>
                <p class="flex items-center mb-1">
                  <span class="text-lg tracking-[.24em] mr-4">捐款新台幣</span
                  ><span class="font-jost text-primary text-[30px] font-bold tracking-[.06em]">NT$ 6,000</span>
                </p>
                <p class="text-text-color tracking-[.06em] mb-9">已有 2,000 人贊助</p>
                <button
                  class="w-full h-[60px] bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded tracking-[.24em]"
                >
                  前往捐款
                </button>
              </div>
              <img src="/images/img/donate/mask.png" alt="" class="absolute z-20" />
              <img src="/images/img/donate/donate2.png" alt="" class="absolute z-10" />
            </div>
          </div>
        </swiper-slide>
        <!-- 3 -->
        <swiper-slide>
          <div class="h-full">
            <div class="w-[1920px] h-[734px] relative overflow-hidden">
              <div
                class="absolute right-[250px] bottom-[45px] w-[452px] h-[322px] bg-white rounded-lg z-30 px-[50px] py-[30px] bg-opacity-70"
              >
                <p class="text-[40px] text-sub-primary font-extrabold tracking-[.26em] mb-[18px]">喵星傳奇</p>
                <p class="flex items-center mb-1">
                  <span class="text-lg tracking-[.24em] mr-4">捐款新台幣</span
                  ><span class="font-jost text-primary text-[30px] font-bold tracking-[.06em]">NT$ 60,000</span>
                </p>
                <p class="text-text-color tracking-[.06em] mb-9">已有 999 人贊助</p>
                <button
                  class="w-full h-[60px] bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded tracking-[.24em] mb-5"
                >
                  前往捐款
                </button>
              </div>
              <img src="/images/img/donate/mask.png" alt="" class="absolute z-20" />
              <img src="/images/img/donate/donate3.png" alt="" class="absolute z-10" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Navigation, A11y } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/pagination'
const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = (e: any) => {
  console.log('slide change', e.activeIndex)
}

const modules = [Navigation, A11y]
</script>
<style lang="scss" scoped>
.swiper-button-prev {
}
</style>
