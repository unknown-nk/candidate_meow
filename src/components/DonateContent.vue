<template>
  <!-- 捐款頁面 -->
  <div class="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
    <div
      v-if="donateView === 1"
      class="w-[1420px] h-[776px] bg-white rounded-lg overflow-hidden flex items-center relative"
    >
      <button @click="closeView" class="absolute top-[30px] right-[30px] cursor-pointer">
        <img src="/images/img/close.svg" alt="" />
      </button>

      <div class="w-[818px] h-[776px]">
        <img :src="propsItem.chooseItem.subImgUrl" alt="" class="w-full" />
      </div>
      <div class="w-[602px] pl-[60px] pr-11">
        <div class="flex items-center mb-5">
          <p class="text-[30px] tracking-[.24em] font-bold mr-4">{{ propsItem.chooseItem.title }}</p>
          <span class="tracking-[.06em]">已有 {{ formatThousandth(propsItem.chooseItem.people) }} 人贊助</span>
        </div>
        <p class="tracking-[.24em] leading-[30px] mb-[100px]">
          眾所皆知貓是外星人派來統治地球的。但牠們發現，只要一直喵喵叫，就能吃到很多好吃的，所以牠們決定要收人類為僕。除了飲食外，玩樂也是相當重要，要時刻注意主子的運動量，才能活得長長久久喔
        </p>
        <div class="mb-10">
          <span class="tracking-[.24em]">捐款新台幣</span>
          <div class="w-full flex justify-between items-center mt-4">
            <button
              @click="amountMinus"
              class="h-[60px] border border-line-color bg-transparent hover:bg-line-color py-[15px] px-[50px] rounded tracking-[.06em]"
            >
              -$100
            </button>
            <span class="font-jost text-primary text-[30px] font-bold tracking-[.06em]"
              >NT$ {{ formatThousandth(amount) }}</span
            >
            <button
              @click="amountPlus"
              class="h-[60px] border border-line-color bg-transparent hover:bg-line-color py-[15px] px-[50px] rounded tracking-[.06em]"
            >
              +$100
            </button>
          </div>
        </div>
        <button
          @click="donate"
          :disabled="!isChecked"
          class="w-full h-[60px] bg-primary disabled:bg-primary-hover hover:bg-primary-hover text-white py-2 px-4 rounded tracking-[.24em] mb-4"
        >
          捐款
        </button>
        <span class="flex items-center">
          <input
            type="checkbox"
            @click="isChecked = !isChecked"
            v-model="isChecked"
            class="accent-sub-primary mr-2 cursor-pointer"
          />
          <p class="text-sm tracking-[.24em]">
            勾選以同意<button @click="goToRule" class="text-primary tracking-[.24em] underline decoration-1">
              捐款聲明
            </button>
          </p>
        </span>
      </div>
    </div>
    <!-- 成功捐款 -->
    <div
      v-if="donateView === 2"
      class="w-[1420px] h-[776px] px-[438px] py-[60px] bg-white rounded-lg overflow-hidden flex flex-col justify-center items-center text-center relative bg-[url('/src/assets/img/donate/bg.png')] bg-no-repeat bg-bottom"
    >
      <button @click="closeView" class="absolute top-[30px] right-[30px] cursor-pointer">
        <img src="/images/img/close.svg" alt="" />
      </button>

      <div class="relative w-[436px] h-[420px]">
        <img src="/images/img/one-fish.svg" alt="" class="absolute bottom-16 right-3" />
        <img src="/images/img/miao.png" alt="" class="absolute z-30 w-[380px] h-[380px]" />
        <img src="/images/img/Vector.png" alt="" class="absolute w-[353px] h-[275px] bottom-6 right-4" />
      </div>

      <div class="mb-10">
        <p class="text-[30px] tracking-[.24em] font-bold mb-5">已成功捐款!</p>
        <p>謝謝您的支持，您的支持是我們最大的動力</p>
      </div>

      <button
        @click="closeView"
        class="w-full h-[60px] bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded tracking-[.24em]"
      >
        回到首頁
      </button>
    </div>
    <!-- 捐款聲明 -->
    <div
      v-if="donateView === 3"
      class="w-[1420px] h-[453px] bg-white rounded-lg overflow-hidden relative px-[100px] py-[60px]"
    >
      <button @click="returnDonate" class="absolute top-[30px] left-[30px] cursor-pointer ]">
        <img src="/images/img/return.svg" alt="" class="h-[27px" />
      </button>
      <button @click="closeView" class="absolute top-[30px] right-[30px] cursor-pointer">
        <img src="/images/img/close.svg" alt="" />
      </button>

      <p class="text-[50px] text-sub-primary font-extrabold tracking-[.26em] mb-10 text-center">捐款聲明</p>
      <div class="flex flex-col items-start">
        <p class="text-lg text-sub-primary font-bold tracking-[.24em] mb-4">對單一貓星人捐贈額度規定</p>
        <p class="tracking-[.24em] leading-[30px]">
          個人捐贈：10罐罐 / 天<br />
          對不同貓星人：一天最多十個罐罐<br />
          對流浪貓星人：一天最多五個罐罐<br />
          貓星人團體：一天最多三十個罐罐
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
/** 1: 主捐款畫面
 *  2: 已成功捐款
 *  3: 捐款聲明 */
const donateView = ref(1)
const propsItem = defineProps(['chooseItem'])
const amount = ref(propsItem.chooseItem.amount)
const isChecked = ref(false)

const emitsComponentOpen = defineEmits(['isComponentOpen'])

const formatThousandth = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const amountPlus = () => {
  amount.value += 100
}

const amountMinus = () => {
  amount.value -= 100
}

const goToRule = () => {
  donateView.value = 3
}

const donate = () => {
  donateView.value = 2
}

const returnDonate = () => {
  donateView.value = 1
}

const closeView = () => {
  emitsComponentOpen('isComponentOpen', false)
}
</script>
<style lang="scss" scoped></style>
