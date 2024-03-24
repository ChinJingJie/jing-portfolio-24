<script setup>
import { ref } from 'vue';

const qalist = ref([
  { q: "Why am I building this website?", a: "https://www.freecodecamp.org/cjjie" },
  { q: "How did I seen myself as a professionalism in IT field?", a: "https://www.freecodecamp.org/cjjie" },
  { q: "What is the position / job I expected?", a: "https2://www.freecodecamp.org/cjjie" },
  { q: "Which part am I confident to stand out from others?", a: "https3://www.freecodecamp.org/cjjie" },
  { q: "How would I build my career goals?", a: "https4://www.freecodecamp.org/cjjie" },
]);
</script>

<template>
  <div class="relative md:top-10 items-center min-h-screen">
    <h2 class="text-4xl md:relative">FAQ</h2>
    <div class="mt-5" v-for="qa in qalist" :key="qa">
      <h3>{{ qa.q }}</h3>
      <p>{{ qa.a }}</p>
    </div>
  </div>
</template>
  