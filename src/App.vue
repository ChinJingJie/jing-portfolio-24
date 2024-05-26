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

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
}

const sectionList = ref([
  { label: 'My Story', path: '/', id: 'story' },
  { label: 'Projects', path: '/projects', id: 'projects' },
  { label: 'Resume', path: '/resume', id: 'resume' },
  { label: 'My Thoughts', path: '/thoughts', id:'thoughts' },
]);

const socialMedias = ref([
  { desc: "Facebook", link: "https://www.facebook.com/jingjie.chin.7/", viewBox: "0 0 512 512", path: "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" },
  { desc: "LinkedIn", link: "https://www.linkedin.com/in/jing-jie-chin-361bb0215/", viewBox: "0 0 448 512", path: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" },
  { desc: "WhatsApp", link: "https://wa.me/+601110911364", viewBox: "0 0 448 512", path: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" },
  { desc: "Email", link: "cjjie112@hotmail.com", viewBox: "0 0 512 512", path: "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" },
]);
</script>

<template>
  <header class="leading-normal bg-secondary-clr text-primary-clr h-fit p-8 md:flex md:h-screen">

    <div class="wrapper">
      <Particles />
      <div class="relative block mb-5 md:flex">
        <img alt="Profile Picture" class="block rounded-full m-auto md:items-start" src="@/assets/profilepic.jpeg" width="180" height="180" />
        <div class="items-center m-auto md:items-start md:ml-10">
          <div class="flex flex-wrap items-center justify-center w-full md:items-start md:justify-start">
            <div class="mt-5">
              <button v-for="media in socialMedias" :key="media" type="button" role="link" @click="media.desc != 'Email' ? openInNewTab(media.link) : addMailWindow(media.link)"
                class="text-white bg-secondary-clr hover:bg-tertiary-clr rounded-lg text-sm p-4 m-1 text-center me-2 md:w-1/3">
                <svg class="w-6 h-6 text-center  md:m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" :viewBox=media.viewBox>
                  <path stroke="currentColor" stroke-width="2" :d=media.path />
                </svg>
                <span class="sr-only">{{ media.desc }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Profile 
        nickname="Jing Jie" 
        position="Web / Mobile Full Stack Developer" 
        intro="Have working experience in Java, React, Python & MS SQL"
      />

      <nav class="flex flex-wrap items-center justify-center w-full md:items-start md:justify-start">
        <button v-for="section in sectionList" :key="section" @click="scrollToSection(section.id)" class="z-10 justify-center content-center border-solid border-2 border-primary-clr bg-secondary-clr hover:bg-tertiary-clr m-1 md:w-5/12">
          <RouterLink :to=section.path class="block text-center w-full font-extrabold p-4">{{ section.label }}</RouterLink>
        </button>
      </nav>
    </div>
  </header>
  <RouterView class="p-8"></RouterView>
</template>