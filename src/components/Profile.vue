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
    <h1>{{ nickname }}</h1>
    <h2>{{ position }}</h2>
    <p>{{ intro }}</p>
  </div>
</template>
