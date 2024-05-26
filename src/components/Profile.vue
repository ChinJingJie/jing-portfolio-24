<script setup>
defineProps({
  nickname: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  intro: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="relative">
    <h1 class="mb-3 text-center md:text-left">{{ nickname }}</h1>
    <h3 class="text-center md:text-left">{{ position }}</h3>
    <p class="mb-3 text-center md:text-left">{{ intro }}</p>
  </div>
</template>
