<template>
  <!-- 回饋 -->
  <div class="h-screen flex justify-center">
    <div class="w-[1420px] grid grid-cols-2 content-center justify-center items-center">
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

      <div class="bg-primary bg-opacity-10 rounded-lg shadow-xl">
        <div class="flex justify-center my-20 mx-[60px]">
          <form class="w-full">
            <label class="block mb-8">
              <span class="block text-xs font-medium text-text-color tracking-[.18em] mb-1">姓名</span>
              <input
                class="caret-primary w-full h-[50px] rounded-lg px-4 py-2.5 text-sm focus:outline-primary"
                placeholder="請輸入"
              />
              <!-- <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
                We need this to steal your identity.
              </p> -->
            </label>
            <label class="block mb-8">
              <span class="block text-xs font-medium text-text-color tracking-[.18em] mb-1">Email</span>
              <input
                class="caret-primary w-full h-[50px] rounded-lg px-4 py-2.5 text-sm focus:outline-primary"
                placeholder="請輸入"
              />
              <!-- <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
                We need this to steal your identity.
              </p> -->
            </label>
            <label class="block mb-8">
              <span class="block text-xs font-medium text-text-color tracking-[.18em] mb-1">手機</span>
              <input
                class="caret-primary w-full h-[50px] rounded-lg px-4 py-2.5 text-sm focus:outline-primary"
                placeholder="請輸入"
              />
              <!-- <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
                We need this to steal your identity.
              </p> -->
            </label>
            <label class="block mb-8">
              <span class="block text-xs font-medium text-text-color tracking-[.18em] mb-1">建言</span>
              <textarea
                class="caret-primary w-full h-[200px] rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-primary"
                maxlength="300"
                placeholder="請輸入"
              ></textarea>

              <!-- <p class="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
                We need this to steal your identity.
              </p> -->
            </label>
            <button
              class="mt-2 w-full h-[60px] bg-primary hover:bg-primary-hover text-white py-2 px-4 rounded tracking-[.24em]"
            >
              前往捐款
            </button>
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
