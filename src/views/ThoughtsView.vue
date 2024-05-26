<script setup>
import { ref } from 'vue';

const qalist = ref([
  { 
    q: "Why am I building this website? And what are used to build the website?", 
    a: "Absolutely, my primary goal is to showcase my work and establish my personal brand. To achieve this, I've chosen Vue.js as the JavaScript framework for my portfolio website after deliberating between Vue.js and React. While I have extensive experience with React, I opted for Vue.js due to its suitability for smaller projects, its flexibility, and its lightweight nature. Additionally, Vue.js's ease of learning was a significant factor in my decision. Embracing this new challenge, I've successfully built my portfolio page using Vue.js, marking an exciting new chapter in my development journey." 
  },
  { 
    q: "How do I perceive my professionalism within the IT industry?", 
    a: "In the IT industry, professionalism encompasses various facets, including experience, critical thinking, and ethical behavior. Experience goes beyond mere tenure; it involves the ability to execute tasks accurately, maintain clean code, and meet deadlines efficiently. While I assess my experience as intermediate, I possess strong analytical skills to provide practical solutions across different tasks. Critical thinking, crucial for issue identification and resolution, has been honed through encountering and debugging numerous coding challenges. Ethical conduct, paramount in maintaining trust and confidentiality, guides my practice of keeping work and personal matters distinct and refraining from divulging sensitive information beyond organizational boundaries." 
  },
  { 
    q: "In which aspect do I believe I excel compared to others?", 
    a: "I believe my adaptability and dedication to growth set me apart from others. These qualities are fueled by passion, which gives me the courage to thrive even in uncertain situations. I have a proven track record of excelling in navigating new challenges and pressure, skills that are particularly valuable in today's fast-paced world. For instance, I have successfully ended probation periods ahead of schedule and spearheaded major feature enhancements, showcasing my adaptability in action. I find satisfaction in receiving positive feedback from customers, especially when they highlight how the features I developed have increased daily operational efficiency. Furthermore, I am deeply committed to continuous growth and development. I actively seek out learning opportunities through online courses, podcasts, and hands-on projects, ensuring that I remain at the forefront of an ever-evolving industry." 
  },
]);
</script>

<template>
  <div id="thoughts" class="relative max-h-screen pb-5 my-auto md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl pb-5">My Thoughts</h2>
    <div class="pb-5" v-for="qa in qalist" :key="qa">
      <h4>{{ qa.q }}</h4>
      <p>{{ qa.a }}</p>
    </div>
  </div>
</template>
  