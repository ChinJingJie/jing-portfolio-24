<script setup>
import { ref } from 'vue';

function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer');
}

const paragrphs = ref([
  { content: "Let's delve deeper into my ISFJ personality traits before you review my resume. I have a fondness for animals, and if I were to choose a representative, it would undoubtedly be the porcupine. Much like the porcupine, I prioritize security and safety in relationships, making others feel at ease in my presence." },
  { content: "Furthermore, I'd like to emphasize my strength as a team player. Being naturally organized, I meticulously attend to details during discussions and development processes. I actively listen to others' perspectives and provide unwavering support to my colleagues." },
  { content: "In essence, this brief overview encapsulates key aspects of my personality. For a comprehensive understanding of my professionalism, I encourage you to peruse my resume." },
]);
</script>

<template>
  <div class="relative max-h-screen my-auto md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl">Resume</h2>
    <img alt="Vue logo" class="relative block z-10 m-auto" src="@/assets/defender.png" width="300" height="300" />
    <div v-for="paragrph in paragrphs" :key="paragrph">
      <p class="mb-5 text-l">{{ paragrph.content }}</p>
    </div>
    <div class="block mt-5">
      <button type="button" role="link" @click="openInNewTab('https://1drv.ms/b/s!AvFZmcpPLMl-hFrAUH3xauflaRnD?e=rijpJV')"
        class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-3 text-center me-2">
        View My Resume
      </button>
    </div>
  </div>
</template>
