<script setup>
import { ref } from 'vue';

function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer');
}
</script>

<template>
  <div class="relative md:top-10 items-center min-h-screen">
    <h2 class="text-4xl md:relative">Resume</h2>
    <img alt="Vue logo" class="relative block z-10 m-auto" src="@/assets/defender.png" width="380" height="380" />
    <p>A paragraph to describe self understandings of my own 16 personality</p>
    <div class="mt-5">
      <button type="button" role="link" @click="openInNewTab('https://1drv.ms/b/s!AvFZmcpPLMl-hFrAUH3xauflaRnD?e=rijpJV')"
        class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-3 text-center me-2">
        View My Resume
      </button>
    </div>
  </div>
</template>
