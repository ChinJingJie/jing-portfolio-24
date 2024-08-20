<script setup>
import { ref } from 'vue';

function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer');
}

const paragrphs = ref([
  { content: "Before you delve into my resume, let me provide you with insights into how my personality traits contribute to my effectiveness in the IT industry. As an ISFJ, I bring a unique blend of traits that are invaluable in a technology-driven environment." },
  { content: "Much like the porcupine, which prioritizes security and safety, I am deeply committed to ensuring the integrity and safety of digital systems. My meticulous attention to detail and methodical approach to problem-solving make me well-suited for tasks that require precision and accuracy, such as coding and debugging." },
  { content: "Moreover, my fondness for animals reflects my empathetic nature, which translates into my ability to understand end-users' needs and preferences. As a team player, I thrive in collaborative environments where I actively listen to diverse perspectives and offer unwavering support to my colleagues. My natural inclination towards organization ensures that projects are well-managed and deadlines are met efficiently." },
  { content: "In essence, my ISFJ personality traits enable me to excel in the IT industry by prioritizing security, fostering collaboration, and delivering results with precision and empathy. I encourage you to explore my resume for a comprehensive overview of my professional qualifications and achievements." },
]);
</script>

<template>
  <div id="resume" class="relative max-h-screen my-auto pb-5 md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl pb-5">Resume</h2>
    <!-- <img alt="Porcupine personality traits" class="relative block z-10 float-end" src="@/assets/defender.png" width="200" height="200" /> -->
    <div v-for="paragrph in paragrphs" :key="paragrph">
      <p class="mb-5 text-l">{{ paragrph.content }}</p>
    </div>
    <div class="block mt-5">
      <button type="button" role="link" @click="openInNewTab('https://1drv.ms/b/s!AvFZmcpPLMl-hGQTiowTo58Dsai5?e=KKA7WO')"
        class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-3 text-center me-2">
        View My Resume
      </button>
    </div>
  </div>
</template>
