<template>
  <DonateContent v-if="isComponentOpen" :chooseItem="chooseItem" @isComponentOpen="handleIsComponentOpen" />
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
        class="absolute z-40 swiper-button-prev w-20 h-20 bg-white rounded-full flex justify-center items-center shadow-xl top-1/2 -translate-y-1/2 left-[60px]"
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
        class="absolute z-40 swiper-button-next w-20 h-20 bg-white rounded-full flex justify-center items-center shadow-xl top-1/2 -translate-y-1/2 right-[60px]"
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
        <swiper-slide v-for="item in data">
          <div class="h-full">
            <div class="w-full h-full relative">
              <div
                class="absolute right-[400px] desktop:right-[250px] bottom-[45px] w-[452px] h-[322px] bg-white rounded-lg z-30 px-[50px] py-[30px] bg-opacity-70"
              >
                <p class="text-[40px] text-sub-primary font-extrabold tracking-[.26em] mb-[18px]">{{ item.title }}</p>
                <p class="flex items-center mb-1">
                  <span class="text-lg tracking-[.24em] mr-4">捐款新台幣</span
                  ><span class="font-jost text-primary text-[30px] font-bold tracking-[.06em]"
                    >NT${{ formatThousandth(item.amount) }}</span
                  >
                </p>
                <p class="text-text-color tracking-[.06em] mb-9">已有 {{ formatThousandth(item.people) }} 人贊助</p>
                <button
                  @click="openComponent(item)"
                  class="w-full h-[60px] bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded tracking-[.24em]"
                >
                  前往捐款
                </button>
              </div>
              <img :src="item.imgUrl" alt="" class="absolute z-20" />
              <img src="/images/img/donate/donate1.png" alt="" class="absolute z-10" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, A11y } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import DonateContent from '../components/DonateContent.vue'

const data = ref([
  {
    title: '喵星人之友',
    amount: 600,
    people: 9957,
    imgUrl: '/images/img/donate/donate1.png',
    subImgUrl: '/images/img/donate/donateImg1.png',
  },
  {
    title: '喵星大使',
    amount: 6000,
    people: 2000,
    imgUrl: '/images/img/donate/donate2.png',
    subImgUrl: '/images/img/donate/donateImg2.png',
  },
  {
    title: '喵星傳奇',
    amount: 60000,
    people: 999,
    imgUrl: '/images/img/donate/donate3.png',
    subImgUrl: '/images/img/donate/donateImg3.png',
  },
])
const chooseItem = ref({
  title: '',
  amount: 0,
  people: 0,
  imgUrl: '',
})

const formatThousandth = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const onSwiper = (swiper: any) => {
  console.log(swiper)
}
const onSlideChange = (e: any) => {
  console.log('slide change', e.activeIndex)
}
const modules = [Navigation, A11y]
const isComponentOpen = ref(false)
const openComponent = (item: any) => {
  isComponentOpen.value = !isComponentOpen.value
  chooseItem.value = item
}
const handleIsComponentOpen = (value: any) => {
  isComponentOpen.value = value
}
</script>
<style lang="scss" scoped>
.swiper-button-prev {
}
</style>
