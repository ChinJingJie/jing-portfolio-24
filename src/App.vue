<template>
  <header class="leading-normal max-h-screen md:flex place-items-center">
    <img alt="Vue logo" class="relative block z-10 rounded-full m-auto" src="@/assets/profilepic.jpeg" width="180" height="180" />

    <div class="wrapper">
      <Particles />
      <Profile 
        nickname="Jing" 
        position="Web / Mobile Full Stack Developer" 
        intro="Hi, I am Jing. A code-addict whom pursue to become a professional programmer."
      />

      <nav class="relative content-center text-center md:text-left">
        <RouterLink to="/" class="inline-block p-4 md:block">Home</RouterLink>
        <RouterLink to="/projects" class="inline-block p-4 md:block">Projects</RouterLink>
        <RouterLink to="/contact" class="inline-block p-4 md:block">Contact</RouterLink>
        <RouterLink to="/resume" class="inline-block p-4 md:block">Resume</RouterLink>
        <RouterLink to="/faq" class="inline-block p-4 md:block">FAQ</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView></RouterView>
</template>

<script setup>
import { RouterView } from "vue-router";
import Particles from "./components/Particles.vue"
import Profile from './components/Profile.vue'
</script>