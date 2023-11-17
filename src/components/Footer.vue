<template>
  <!-- Footer -->
  <div class="flex justify-center border-t-2 border-primary pt-[20px] pad:pt-0">
    <div class="w-[1420px] h-[420px] pad:grid grid-cols-3 justify-center content-center flex flex-col items-center">
      <div class="mb-[60px] pad:mb-0">
        <span class="font-jost text-sub-primary font-bold text-[18px] mb-10 hidden pad:block">Information</span>
        <div>
          <p class="mb-8 tracking-[0.24em] flex justify-center pad:justify-start items-center">
            <i
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
                class="w-6 h-6 text-primary mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg> </i
            >喵星區，毛茸茸大道88號，喵喵大樓3樓
          </p>
          <p class="mb-8 flex justify-center pad:justify-start items-center">
            <i
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg> </i
            >(02) 888-5678
          </p>
          <p class="flex justify-center pad:justify-start items-center">
            <i
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-primary mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg> </i
            >meowoffice@linmeow.tw
          </p>
        </div>
      </div>
      <div class="hidden pad:block">
        <span class="font-jost text-sub-primary font-bold text-[18px] mb-10 block">Links</span>
        <div class="grid grid-rows-4 grid-flow-col gap-4 text-primary font-jost">
          <a href="" class="hover:text-primary-hover">About me</a>
          <a href="" class="hover:text-primary-hover">Last activity</a>
          <a href="" class="hover:text-primary-hover">Policy</a>
          <a href="" class="hover:text-primary-hover">Donate</a>
          <a href="" class="hover:text-primary-hover">Feedback</a>
        </div>
      </div>
      <div>
        <span class="font-jost text-sub-primary font-bold text-[18px] mb-10 hidden pad:block">Follow us</span>
        <div class="grid grid-rows-3">
          <div class="row-span-2 flex">
            <div
              class="w-[80px] h-[80px] rounded-full border border-disabled-color flex justify-center items-center mr-7"
            >
              <img src="/images/img/facebook-1.svg" alt="" />
            </div>
            <div
              class="w-[80px] h-[80px] rounded-full border border-disabled-color flex justify-center items-center mr-7"
            >
              <img src="/images/img/ig-1.svg" alt="" />
            </div>
            <div
              class="w-[80px] h-[80px] rounded-full border border-disabled-color flex justify-center items-center mr-7"
            >
              <img src="/images/img/line-1.svg" alt="" />
            </div>
            <div class="w-[80px] h-[80px] rounded-full border border-disabled-color flex justify-center items-center">
              <img src="/images/img/youtube-1.svg" alt="" />
            </div>
          </div>
        </div>
        <p class="h-full align-bottom block text-center pad:text-start">版權聲明：© 2023喵立翰 版權所有</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
