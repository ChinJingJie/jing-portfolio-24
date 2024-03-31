<script setup>
import { ref } from 'vue';

const projectslist = ref([
  {
    name: "Project A", desc: "A web based project for fun only. Also use to boost profesionalism",
    image: 'defender.png',
    tags: [{id: 'uni coursework' },{id: 'web-development'}]
  },
  {
    name: "Project B", desc: "A mobile based project for fun only. Also use to boost profesionalism",
    image: 'defender.png',
    tags: [{id: 'uni coursework' },{id: 'mobile'}]
  },
  {
    name: "Project C", desc: "A console project for fun only. Also use to boost profesionalism",
    image: 'defender.png',
    tags: [{id: 'uni coursework' },{id: 'console'}]
  }

])

</script>

<template>
  <div class="relative max-h-screen my-auto md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl">Projects</h2>
    <p>Add search by keyword at left, filter by tag at right</p>
    <div v-for="project in projectslist" :key="project" class="inline-block max-w-60 rounded overflow-hidden shadow-lg bg-white border-secondary-clr border-2 m-2">
      <img class="w-full" src="@/assets/defender.png" :alt=project.name>
      <div class="px-6 py-4">
        <div class="text-secondary-clr font-bold text-l mb-2"> {{ project.name }}</div>
        <p>{{ project.desc }}</p>
      </div>
      <div v-for="tag in project.tags" :key="tag" class="ml-2">
        <span class="inline-block bg-secondary-clr rounded-full px-3 py-1 text-xs font-semibold text-white mr-2 mb-2">#{{ tag.id }}</span>
      </div>
    </div>
  </div>
</template>
  