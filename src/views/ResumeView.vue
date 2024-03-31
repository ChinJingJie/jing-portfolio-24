<script setup>
import { ref } from 'vue';

function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer');
}
</script>

<template>
  <div class="relative max-h-screen my-auto md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl">Resume</h2>
    <img alt="Vue logo" class="relative block z-10 m-auto" src="@/assets/defender.png" width="380" height="380" />
    <p class="mt-10 text-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat non libero non venenatis. Vestibulum nec magna quis erat pellentesque condimentum. Mauris at felis ut purus suscipit pulvinar quis at velit. Proin feugiat sapien ut nisl condimentum, nec blandit quam commodo. Nam placerat egestas mauris, sed ullamcorper nisl sollicitudin sit amet. Sed rhoncus viverra risus nec vestibulum. Ut quis ligula rhoncus, rhoncus libero nec, consequat dolor. Pellentesque tincidunt odio id eros porta, id finibus metus gravida. Vivamus sit amet rhoncus mi, congue pharetra sem.</p>
    <div class="block mt-5">
      <button type="button" role="link" @click="openInNewTab('https://1drv.ms/b/s!AvFZmcpPLMl-hFrAUH3xauflaRnD?e=rijpJV')"
        class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-3 text-center me-2">
        View My Resume
      </button>
    </div>
  </div>
</template>
