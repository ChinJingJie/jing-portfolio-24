<script setup>
import { ref } from 'vue';

const paragrphs = ref([
  { content: "I am Jing, hailing from Johor, Malaysia, and as a member of Gen Z, I find solace in the quietude of a crowd. However, my demeanor transforms into that of an extrovert when the conversation veers towards topics of coding or technology. The thrill of successfully developing new features for websites and mobile apps fills me with immense joy, thanks to the coding skills I have honed." },
  { content: "My coding journey commenced at the age of 15 when I delved into block coding on code.org. Along the way, my interests fluctuated, yet after exploring various fascinating avenues, I found that coding provided me with the most profound mental satisfaction while also ensuring a livelihood." },
  { content: "Proudly, I can affirm that I possess strong fundamentals to establish myself as an IT professional. A defining moment in my university life was presenting our final year research project on the Reverse Drug Discovery Web Portal at the ASEAN Australia Engineering Congress 2022 (AAEC2022)." },
  { content: "I consider myself fortunate to pursue a career as a developer. While many of my college peers with computer science certifications ventured into different sectors, I secured a position as a web and mobile developer. I attribute this to my competitiveness, which has brought me luck. The challenges encountered in my professional life have provided invaluable experiences, enhancing both my soft skills and technical knowledge. Through perseverance, I have evolved from a novice to a seasoned developer; after all, practice makes perfect." },
  { content: "In essence, this summarizes my journey of growth as a professional developer. Feel free to engage with me if you wish to delve deeper into my experiences." },
]);
</script>

<template>
  <div class="relative max-h-screen md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl mb-5">My Story</h2>
    <div v-for="paragrph in paragrphs" :key="paragrph">
      <p class="mb-5 text-l">{{ paragrph.content }}</p>
    </div>
  </div>
</template>
