<script setup>
import { ref } from 'vue';

function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer');
}

const codingPlatforms = ref([
  { desc: "Free Code Camp", link: "https://www.freecodecamp.org/cjjie", viewBox: "0 0 576 512", path: "M97.2 96.2c10.4-10.7 16-17.1 16-21.9 0-2.8-1.9-5.5-3.8-7.4A14.8 14.8 0 0 0 101 64.1c-8.5 0-20.9 8.8-35.8 25.7C23.7 137 2.5 182.8 3.4 250.3s17.5 117 54.1 161.9C76.2 435.9 90.6 448 100.9 448a13.6 13.6 0 0 0 8.4-3.8c1.9-2.8 3.8-5.6 3.8-8.4 0-5.6-3.9-12.2-13.2-20.6-44.5-42.3-67.3-97-67.5-165C32.3 188.8 54 137.8 97.2 96.2zM239.5 420.1c.6 .4 .9 .6 .9 .6zm93.8 .6 .2-.1C333.2 420.6 333.2 420.7 333.3 420.6zm3.1-158.2c-16.2-4.2 50.4-82.9-68.1-177.2 0 0 15.5 49.4-62.8 159.6-74.3 104.4 23.5 168.7 34 175.2-6.7-4.4-47.4-35.7 9.6-128.6 11-18.3 25.5-34.9 43.5-72.2 0 0 15.9 22.5 7.6 71.1C287.7 364 354 342.9 355 343.9c22.8 26.8-17.7 73.5-21.6 76.6 5.5-3.7 117.7-78 33-188.1C360.4 238.4 352.6 266.6 336.4 262.4zM510.9 89.7C496 72.8 483.5 64 475 64a14.8 14.8 0 0 0 -8.4 2.8c-1.9 1.9-3.8 4.7-3.8 7.4 0 4.8 5.6 11.3 16 21.9 43.2 41.6 65 92.6 64.8 154.1-.2 68-23 122.6-67.5 165-9.3 8.4-13.2 14.9-13.2 20.6 0 2.8 1.9 5.6 3.8 8.4A13.6 13.6 0 0 0 475.1 448c10.3 0 24.7-12.1 43.5-35.8 36.6-44.9 53.1-94.4 54.1-161.9S552.3 137 510.9 89.7z" },
  { desc: "Github", link: "https://github.com/ChinJingJie", viewBox: "0 0 512 512",  path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" },
  { desc: "Codepen", link: "https://codepen.io/cjjie", viewBox: "0 0 512 512", path: "M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z" },
]);

const projectslist = ref([
  {
    name: "Grocery Bud", desc: "A Recat project that manage your grocery list.",
    tags: [{id: 'CRUD' },{id: 'React'}],
    link: 'https://codepen.io/cjjie/full/ExJzEdW'
  },
  {
    name: "Tower of Hanoi", desc: "A React project that builds the classic mathematical puzzle game.",
    tags: [{id: 'Game' },{id: 'React'}],
    link: 'https://codepen.io/cjjie/full/OJGadJa'
  },
  {
    name: "Member Dashboard", desc: "A React project that renders member details in card view.",
    tags: [{id: 'REST API' },{id: 'React'}],
    link: 'https://codepen.io/cjjie/full/XWQwZGv'
  },
  {
    name: "Survey Form", desc: "A survey form that collects user opinions on game played.",
    tags: [{id: 'Form' },{id: 'HTML'},{id: 'CSS'}],
    link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-survey-form-project/build-a-survey-form'
  },
  {
    name: "Product Landing Page", desc: "A product landing page for folding piano.",
    tags: [{id: 'Web page' },{id: 'HTML'},{id: 'CSS'}],
    link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/build-a-product-landing-page-project/build-a-product-landing-page'
  },
  {
    name: "Javascript Drumkit", desc: "A virtual drum for you to play music online.",
    tags: [{id: 'Music' },{id: 'HTML'},{id: 'CSS'},{id: 'JavaScript'}],
    link: 'https://github.com/ChinJingJie/JavaScriptDrumKit'
  },
  {
    name: "Spelling Checker", desc: "An application help in checking English spelling and return correct word.",
    tags: [{id: 'GUI applications' },{id: 'Python'},{id: 'Tkinter'}],
    link: 'https://github.com/ChinJingJie/Spelling_Checker'
  },
  {
    name: "Identifying Natural Disaster", desc: "A trained CNN model that identify users post related to natural disaster.",
    tags: [{id: 'Natural Language Processing' },{id: 'Python'},{id: 'CNN'}],
    link: 'https://colab.research.google.com/drive/18BjOrvT_7nRwBByUg8PyydLL-sI84x42?usp=sharing'
  }

])

</script>

<template>
  <div class="relative max-h-screen my-auto md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl">Projects</h2>
    <div class="mt-5">
      <div v-for="project in projectslist" :key="project" class="px-6 mt-1/2 inline-block w-full rounded overflow-hidden shadow-lg bg-white border-secondary-clr border-2">
        <div class="py-2">
          <div class="text-secondary-clr font-bold text-l"> 
            {{ project.name }}
            <button type="button" role="link" @click="openInNewTab(project.link)"
          class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-1 text-center">
              <svg class="w-3 h-3 text-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512">
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
              </svg>
            </button>
          </div>
          <p>{{ project.desc }}</p>
        </div>
        <div v-for="tag in project.tags" :key="tag" class="mr-2 inline">
          <span class="inline-block bg-secondary-clr rounded-full px-3 py-1 text-xs font-semibold text-white mb-2">#{{ tag.id }}</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 items-center justify-center md:items-start">
      <div class="mt-5">
        <p class="mb-5">More projects in...</p>
        <button v-for="platform in codingPlatforms" :key="platform" type="button" role="link" @click="openInNewTab(platform.link)"
          class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-3 text-center me-2">
          <svg class="w-6 h-6 text-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" :viewBox=platform.viewBox>
            <path stroke="currentColor" stroke-width="2" :d=platform.path />
          </svg>
          <span class="sr-only">{{ platform.desc }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
  