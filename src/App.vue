<script setup>
import { ref } from 'vue';
import { RouterView } from "vue-router";
import Particles from "./components/Particles.vue"
import Profile from './components/Profile.vue'

function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer');
}

function addMailWindow(email) {
  window.open('mailto:'+email+'?subject=Mail From Portfolio Website');
}

const codingPlatforms = ref([
  { desc: "Free Code Camp", link: "https://www.freecodecamp.org/cjjie", viewBox: "0 0 576 512", path: "M97.2 96.2c10.4-10.7 16-17.1 16-21.9 0-2.8-1.9-5.5-3.8-7.4A14.8 14.8 0 0 0 101 64.1c-8.5 0-20.9 8.8-35.8 25.7C23.7 137 2.5 182.8 3.4 250.3s17.5 117 54.1 161.9C76.2 435.9 90.6 448 100.9 448a13.6 13.6 0 0 0 8.4-3.8c1.9-2.8 3.8-5.6 3.8-8.4 0-5.6-3.9-12.2-13.2-20.6-44.5-42.3-67.3-97-67.5-165C32.3 188.8 54 137.8 97.2 96.2zM239.5 420.1c.6 .4 .9 .6 .9 .6zm93.8 .6 .2-.1C333.2 420.6 333.2 420.7 333.3 420.6zm3.1-158.2c-16.2-4.2 50.4-82.9-68.1-177.2 0 0 15.5 49.4-62.8 159.6-74.3 104.4 23.5 168.7 34 175.2-6.7-4.4-47.4-35.7 9.6-128.6 11-18.3 25.5-34.9 43.5-72.2 0 0 15.9 22.5 7.6 71.1C287.7 364 354 342.9 355 343.9c22.8 26.8-17.7 73.5-21.6 76.6 5.5-3.7 117.7-78 33-188.1C360.4 238.4 352.6 266.6 336.4 262.4zM510.9 89.7C496 72.8 483.5 64 475 64a14.8 14.8 0 0 0 -8.4 2.8c-1.9 1.9-3.8 4.7-3.8 7.4 0 4.8 5.6 11.3 16 21.9 43.2 41.6 65 92.6 64.8 154.1-.2 68-23 122.6-67.5 165-9.3 8.4-13.2 14.9-13.2 20.6 0 2.8 1.9 5.6 3.8 8.4A13.6 13.6 0 0 0 475.1 448c10.3 0 24.7-12.1 43.5-35.8 36.6-44.9 53.1-94.4 54.1-161.9S552.3 137 510.9 89.7z" },
  { desc: "Github", link: "https://github.com/ChinJingJie", viewBox: "0 0 512 512",  path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" },
  { desc: "Codepen", link: "https://codepen.io/Kocek", viewBox: "0 0 512 512", path: "M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z" },
]);

const socialMedias = ref([
  { desc: "Facebook", link: "https://www.facebook.com/jingjie.chin.7/", viewBox: "0 0 512 512", path: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" },
  { desc: "LinkedIn", link: "https://www.linkedin.com/in/jing-jie-chin-361bb0215/", viewBox: "0 0 512 512", path: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" },
  { desc: "WhatsApp", link: "https://wa.me/+601110911364", viewBox: "0 0 512 512", path: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" },
  { desc: "Email", link: "cjjie112@hotmail.com", viewBox: "0 0 512 512", path: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" },
]);
</script>

<template>
  <header class="leading-normal max-h-screen md:flex m-5">

    <div class="wrapper">
      <Particles />
      <div class="relative block mb-5 md:flex">
        <img alt="Vue logo" class="block rounded-full m-auto md:items-start" src="@/assets/profilepic.jpeg" width="180" height="180" />
        <div class="items-center m-auto md:items-start md:ml-5">
          <div class="flex flex-col flex-1 items-center justify-center md:items-start">
            <div class="mt-5">
              <button v-for="platform in codingPlatforms" :key="platform" type="button" role="link" @click="openInNewTab(platform.link)"
                class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-3 text-center me-2">
                <svg class="w-6 h-6 text-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" :viewBox=platform.viewBox>
                  <path stroke="currentColor" stroke-width="2" :d=platform.path />
                </svg>
                <span class="sr-only">{{ platform.desc }}</span>
              </button>
            </div>
          </div>
          <div class="flex flex-col flex-1 items-center justify-center md:items-start">
            <div class="mt-5">
              <button v-for="media in socialMedias" :key="media" type="button" role="link" @click="media.desc != 'Email' ? openInNewTab(media.link) : addMailWindow(media.link)"
                class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-3 text-center me-2">
                <svg class="w-6 h-6 text-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" :viewBox=media.viewBox>
                  <path stroke="currentColor" stroke-width="2" :d=media.path />
                </svg>
                <span class="sr-only">{{ media.desc }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Profile 
        nickname="Jing" 
        position="Web / Mobile Full Stack Developer" 
        intro="Hi, I am Jing. A code-addict whom pursue to become a professional programmer."
      />

      <nav class="relative content-center text-center md:text-left">
        <RouterLink to="/" class="inline-block p-4 md:block">My Story</RouterLink>
        <RouterLink to="/projects" class="inline-block p-4 md:block">Projects</RouterLink>
        <RouterLink to="/resume" class="inline-block p-4 md:block">Resume</RouterLink>
        <RouterLink to="/faq" class="inline-block p-4 md:block">FAQ</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView></RouterView>
</template>