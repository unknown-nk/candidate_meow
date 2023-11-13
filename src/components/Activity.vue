<template>
  <!-- 最新活動 -->
  <div class="h-[80vh] flex justify-center bg-[url('/src/assets/img/bg.png')] bg-center bg-no-repeat">
    <div class="w-[1420px] flex flex-col items-start justify-center">
      <div class="mb-[76px]">
        <span class="font-jost text-primary text-[30px]">Last Activity</span>
        <p class="text-[80px] text-sub-primary font-extrabold tracking-[.28em]">最新活動</p>
      </div>
      <div class="w-[1670px] overflow-hidden">
        <div class="w-[1920px]">
          <swiper
            :slidesPerView="'auto'"
            :slidesPerGroup="2"
            :spaceBetween="40"
            :loop="true"
            :pagination="{
              clickable: true,
              type: 'custom',
            }"
            :modules="modules"
            class="mySwiper"
          >
            <!-- 1 -->
            <swiper-slide>
              <div class="flex flex-col">
                <div
                  class="w-[578px] h-[325px] rounded-lg bg-slate-600 overflow-hidden flex justify-center items-center mb-[38px]"
                >
                  <img src="/images/img/activity/activity1.png" alt="" />
                </div>
                <span class="text-primary flex items-center mb-[46px] font-jost">
                  <p class="text-[50px] font-medium mr-4">2023</p>
                  <p class="text-[30px] tracking-[.06em] mr-4">12/26</p>
                  <span class="w-full h-[1px] border-b border-line-color"></span>
                </span>
                <div>
                  <p class="text-[30px] font-bold mb-[18px] tracking-[.24em]">參與台北寵物論壇，爭取貓咪友善環境</p>
                  <p class="tracking-[.24em]">
                    炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                    VIP 休憩空間。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <!-- 2 -->
            <swiper-slide
              ><div class="flex flex-col">
                <div
                  class="w-[578px] h-[325px] rounded-lg bg-slate-600 overflow-hidden flex justify-center items-center mb-[38px]"
                >
                  <img src="/images/img/activity/activity2.png" alt="" />
                </div>
                <span class="text-primary flex items-center mb-[46px] font-jost">
                  <p class="text-[50px] font-medium mr-4">2023</p>
                  <p class="text-[30px] tracking-[.06em] mr-4">12/24</p>
                  <span class="w-full h-[1px] border-b border-line-color"></span>
                </span>
                <div>
                  <p class="text-[30px] font-bold mb-[18px] tracking-[.24em]">
                    掃街模式開啟！帶著你的貓耳，來和我一起走！
                  </p>
                  <p class="tracking-[.24em]">
                    街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。
                  </p>
                </div>
              </div></swiper-slide
            >
            <!-- 3 -->
            <swiper-slide
              ><div class="flex flex-col">
                <div
                  class="w-[578px] h-[325px] rounded-lg bg-slate-600 overflow-hidden flex justify-center items-center mb-[38px]"
                >
                  <img src="/images/img/activity/activity3.png" alt="" />
                </div>
                <span class="text-primary flex items-center mb-[46px] font-jost">
                  <p class="text-[50px] font-medium mr-4">2023</p>
                  <p class="text-[30px] tracking-[.06em] mr-4">12/20</p>
                  <span class="w-full h-[1px] border-b border-line-color"></span>
                </span>
                <div>
                  <p class="text-[30px] font-bold mb-[18px] tracking-[.24em]">收容所模特兒大比拼！</p>
                  <p class="tracking-[.24em]">
                    今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                  </p>
                </div>
              </div></swiper-slide
            >
            <!-- 4 -->
            <swiper-slide
              ><div class="flex flex-col">
                <div
                  class="w-[578px] h-[325px] rounded-lg bg-slate-600 overflow-hidden flex justify-center items-center mb-[38px]"
                >
                  <img src="/images/img/activity/activity1.png" alt="" />
                </div>
                <span class="text-primary flex items-center mb-[46px] font-jost">
                  <p class="text-[50px] font-medium mr-4">2023</p>
                  <p class="text-[30px] tracking-[.06em] mr-4">12/26</p>
                  <span class="w-full h-[1px] border-b border-line-color"></span>
                </span>
                <div>
                  <p class="text-[30px] font-bold mb-[18px] tracking-[.24em]">參與台北寵物論壇，爭取貓咪友善環境</p>
                  <p class="tracking-[.24em]">
                    炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                    VIP 休憩空間。
                  </p>
                </div>
              </div></swiper-slide
            >
            <!-- 5 -->
            <swiper-slide
              ><div class="flex flex-col">
                <div
                  class="w-[578px] h-[325px] rounded-lg bg-slate-600 overflow-hidden flex justify-center items-center mb-[38px]"
                >
                  <img src="/images/img/activity/activity1.png" alt="" />
                </div>
                <span class="text-primary flex items-center mb-[46px] font-jost">
                  <p class="text-[50px] font-medium mr-4">2023</p>
                  <p class="text-[30px] tracking-[.06em] mr-4">12/26</p>
                  <span class="w-full h-[1px] border-b border-line-color"></span>
                </span>
                <div>
                  <p class="text-[30px] font-bold mb-[18px] tracking-[.24em]">參與台北寵物論壇，爭取貓咪友善環境</p>
                  <p class="tracking-[.24em]">
                    炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                    VIP 休憩空間。
                  </p>
                </div>
              </div></swiper-slide
            >
            <!-- 6 -->
            <swiper-slide
              ><div class="flex flex-col">
                <div
                  class="w-[578px] h-[325px] rounded-lg bg-slate-600 overflow-hidden flex justify-center items-center mb-[38px]"
                >
                  <img src="/images/img/activity/activity1.png" alt="" />
                </div>
                <span class="text-primary flex items-center mb-[46px] font-jost">
                  <p class="text-[50px] font-medium mr-4">2023</p>
                  <p class="text-[30px] tracking-[.06em] mr-4">12/26</p>
                  <span class="w-full h-[1px] border-b border-line-color"></span>
                </span>
                <div>
                  <p class="text-[30px] font-bold mb-[18px] tracking-[.24em]">參與台北寵物論壇，爭取貓咪友善環境</p>
                  <p class="tracking-[.24em]">
                    炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
                    VIP 休憩空間。
                  </p>
                </div>
              </div></swiper-slide
            >
          </swiper>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Pagination, A11y } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/pagination'
const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = (e: any) => {
  // swiper切换的时候执行的方法
  console.log('slide change', e.activeIndex)
}
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Pagination, A11y]
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: 578px !important;
}

.swiper-pagination {
  position: absolute !important;
  top: 10px;
  right: 10px;
  width: auto !important;
  left: auto !important;
  margin: 0;
}
.swiper-pagination-bullet {
  padding: 5px 10px;
  border-radius: 0;
  width: auto;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}
.swiper-pagination-bullet-active {
  color: #fff;
  background: #ea7f1b !important;
}
</style>
