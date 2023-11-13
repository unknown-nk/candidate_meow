<template>
  <!-- 回饋 -->
  <div class="h-screen flex justify-center">
    <div class="w-[1420px] grid grid-cols-2 content-center justify-center">
      <div class="grow">
        <span class="font-jost text-primary text-[30px]">Feedback</span>
        <p class="text-[80px] text-sub-primary font-extrabold tracking-[.28em]">民眾服務信箱</p>
        <div class="mt-20 tracking-[.24em] leading-[30px] pr-[170px]">
          <p class="text-[30px] font-bold mb-[18px]">您的聲音，我們的行動！</p>
          <p>
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！
          </p>
        </div>
      </div>

      <div class="bg-primary opacity-10 rounded-lg shadow-main">
        <div class="grid grid-rows-6 my-20 mx-[60px]">
          <form class="z-50">
            <label class="block">
              <span class="block text-xs font-medium text-slate-700">姓名</span>
              <input class="caret-primary" />
              <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
                We need this to steal your identity.
              </p>
            </label>
          </form>

          <!-- <div class="flex flex-col">
            <span>姓名</span>
            <input type="text" />
          </div>
          <div><span>Email</span> <input type="text" /></div>
          <div><span>手機</span> <input type="text" /></div>
          <div><span>建言</span> <input type="text" /></div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
