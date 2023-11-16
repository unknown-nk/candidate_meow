<template>
  <!-- 政策議題 -->
  <div class="h-[80vh] flex justify-center">
    <div class="w-pad desktop:w-mid max:w-desktop flex flex-col items-start justify-center relative">
      <div class="mb-[60px] ">
        <span class="font-jost text-primary text-[30px]">Policy</span>
        <p class="text-[80px] text-sub-primary font-extrabold tracking-[.28em]">政策議題</p>
      </div>
      
      <div class="w-full h-[558px] flex relative">
        <div class="swiper-pagination-policy"></div>
        <div class="w-full h-[558px]  rounded-lg overflow-hidden  relative">
        <div class='w-full h-full bg-primary bg-opacity-10 ml-[94px] rounded-lg absolute -z-10'></div>
          <swiper
            :direction="'vertical'"
            :slidesPerView="1"
            :mousewheel="true"
            :pagination="{
              el: '.swiper-pagination-policy',
              clickable: true,
            }"
            :modules="modules"
            class="mySwiper w-full h-full z-30"
          >
            <!-- 1 -->
            <swiper-slide>
                <div class='h-full flex items-center'>
              <div class="flex justify-start items-center">
                <div
                  class="w-[661px] h-auto max:h-[393px] rounded-lg bg-slate-600 overflow-hidden flex justify-center items-center mr-[60px]"
                >
                  <img src="/images/img/policy/policy1.png" alt="" />
                </div>

                <div class='w-[50%] max:w-[578px] mr-16 max:mr-2'>
                  <p class="text-[30px] font-bold mb-[18px] tracking-[.24em]">為毛孩子謀福利！推動寵物醫療保障方案</p>
                  <p class="tracking-[.24em] pl-10">
                    <ol class='list-decimal	'>
                        <li>街上氣氛真設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。</li>
                        <li>提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。</li>
                        <li>合作動物醫院：目前已有和超過 200
                    家動物醫院進行初步的合作討論的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。</li>
                    </ol>
                
                  </p>
                </div>
              </div>
            </div>
            </swiper-slide>
            <!-- 2 -->
            <swiper-slide>
                <div class='h-full flex items-center'>
                <div class="flex justify-around items-center">
                <div
                  class="w-[661px] h-auto max:h-[393px] rounded-lg bg-slate-600 overflow-hidden flex justify-center items-center mr-[60px]"
                >
                  <img src="/images/img/policy/policy2.png" alt="" />
                </div>

                <div class='w-[50%] max:w-[578px] mr-16 max:mr-2'>
                  <p class="text-[30px] font-bold mb-[18px] tracking-[.24em]">打造休閒天堂！推廣寵物休閒與娛樂場所</p>
                  <p class="tracking-[.24em] pl-10">
                    <ol class='list-decimal	'>
                        <li>建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。</li>
                        <li>推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。</li>
                        <li>舉辦寵物活動和工作坊：與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。</li>
                    </ol>
                
                  </p>
                </div>
              </div>
            </div>
            </swiper-slide>
          </swiper>
        </div>
      
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import { Mousewheel, Pagination } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/pagination'
const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = (e: any) => {
  console.log('slide change', e.activeIndex)
}

const modules = [Mousewheel, Pagination]
</script>
<style lang="scss" scoped>
.swiper-slide {
  //   width: 578px !important;
}

.swiper-pagination-policy {
    width: auto !important;
  height: auto !important;
    position: absolute !important;
    right: 45px !important;
    top: 50% !important;
  margin: 0;
  z-index: 50;
  --swiper-theme-color: #ea7f1b !important;
  --swiper-pagination-bullet-width: 1px;
  --swiper-pagination-bullet-height: 50px;
  --swiper-pagination-bullet-border-radius: 0%;
  --swiper-pagination-bullet-horizontal-gap: 0;
  --swiper-pagination-bullet-vertical-gap:0


  .swiper-pagination-bullet {
  }
  .swiper-pagination-bullet-active {
    width: 3px !important;
  }
}
</style>
