<template>
  <!-- 回到上方 -->
  <button @click="scrollToTop" class="fixed right-24 bottom-8 rounded-full shadow-2xl z-50">
    <img src="/images/img/go-top.svg" alt="Go Top" />
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
<style lang="scss" scoped></style>
