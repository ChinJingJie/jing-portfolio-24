<script setup>
import { ref } from 'vue';

const qalist = ref([
  { 
    q: "Why am I building this website?", 
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae aliquam dolor. Duis ac eleifend odio. In at felis in est efficitur porta dignissim at risus. Nunc commodo congue lacus. Quisque commodo ligula a faucibus cursus. Vestibulum condimentum augue a purus euismod consectetur. Praesent varius ullamcorper magna, congue finibus ligula tristique et. Sed sem enim, viverra vitae interdum at, tempus at nulla. Etiam at commodo ex, id dictum quam. In sodales sodales nunc ac vestibulum. Vestibulum placerat porta risus eu rutrum. Vivamus id odio ullamcorper, tristique lacus eget, egestas ligula. Integer egestas rhoncus purus eget posuere. Pellentesque maximus, augue id mattis tincidunt, turpis quam bibendum dolor, sed ultricies quam augue nec diam. Praesent justo ipsum, suscipit at enim eget, convallis volutpat augue. Vivamus quis dui et urna sodales bibendum et vitae enim." 
  },
  { 
    q: "How did I seen myself as a professionalism in IT field?", 
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae aliquam dolor. Duis ac eleifend odio. In at felis in est efficitur porta dignissim at risus. Nunc commodo congue lacus. Quisque commodo ligula a faucibus cursus. Vestibulum condimentum augue a purus euismod consectetur. Praesent varius ullamcorper magna, congue finibus ligula tristique et. Sed sem enim, viverra vitae interdum at, tempus at nulla. Etiam at commodo ex, id dictum quam. In sodales sodales nunc ac vestibulum. Vestibulum placerat porta risus eu rutrum. Vivamus id odio ullamcorper, tristique lacus eget, egestas ligula. Integer egestas rhoncus purus eget posuere. Pellentesque maximus, augue id mattis tincidunt, turpis quam bibendum dolor, sed ultricies quam augue nec diam. Praesent justo ipsum, suscipit at enim eget, convallis volutpat augue. Vivamus quis dui et urna sodales bibendum et vitae enim." 
  },
  { 
    q: "What is the position / job I expected?", 
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae aliquam dolor. Duis ac eleifend odio. In at felis in est efficitur porta dignissim at risus. Nunc commodo congue lacus. Quisque commodo ligula a faucibus cursus. Vestibulum condimentum augue a purus euismod consectetur. Praesent varius ullamcorper magna, congue finibus ligula tristique et. Sed sem enim, viverra vitae interdum at, tempus at nulla. Etiam at commodo ex, id dictum quam. In sodales sodales nunc ac vestibulum. Vestibulum placerat porta risus eu rutrum. Vivamus id odio ullamcorper, tristique lacus eget, egestas ligula. Integer egestas rhoncus purus eget posuere. Pellentesque maximus, augue id mattis tincidunt, turpis quam bibendum dolor, sed ultricies quam augue nec diam. Praesent justo ipsum, suscipit at enim eget, convallis volutpat augue. Vivamus quis dui et urna sodales bibendum et vitae enim." 
  },
  { 
    q: "Which part am I confident to stand out from others?", 
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae aliquam dolor. Duis ac eleifend odio. In at felis in est efficitur porta dignissim at risus. Nunc commodo congue lacus. Quisque commodo ligula a faucibus cursus. Vestibulum condimentum augue a purus euismod consectetur. Praesent varius ullamcorper magna, congue finibus ligula tristique et. Sed sem enim, viverra vitae interdum at, tempus at nulla. Etiam at commodo ex, id dictum quam. In sodales sodales nunc ac vestibulum. Vestibulum placerat porta risus eu rutrum. Vivamus id odio ullamcorper, tristique lacus eget, egestas ligula. Integer egestas rhoncus purus eget posuere. Pellentesque maximus, augue id mattis tincidunt, turpis quam bibendum dolor, sed ultricies quam augue nec diam. Praesent justo ipsum, suscipit at enim eget, convallis volutpat augue. Vivamus quis dui et urna sodales bibendum et vitae enim." 
  },
  { 
    q: "How would I build my career goals?", 
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae aliquam dolor. Duis ac eleifend odio. In at felis in est efficitur porta dignissim at risus. Nunc commodo congue lacus. Quisque commodo ligula a faucibus cursus. Vestibulum condimentum augue a purus euismod consectetur. Praesent varius ullamcorper magna, congue finibus ligula tristique et. Sed sem enim, viverra vitae interdum at, tempus at nulla. Etiam at commodo ex, id dictum quam. In sodales sodales nunc ac vestibulum. Vestibulum placerat porta risus eu rutrum. Vivamus id odio ullamcorper, tristique lacus eget, egestas ligula. Integer egestas rhoncus purus eget posuere. Pellentesque maximus, augue id mattis tincidunt, turpis quam bibendum dolor, sed ultricies quam augue nec diam. Praesent justo ipsum, suscipit at enim eget, convallis volutpat augue. Vivamus quis dui et urna sodales bibendum et vitae enim." 
  },
]);
</script>

<template>
  <div class="relative max-h-screen pb-5 my-auto md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl pb-5">FAQ</h2>
    <div class="pb-5" v-for="qa in qalist" :key="qa">
      <h3>{{ qa.q }}</h3>
      <p>{{ qa.a }}</p>
    </div>
  </div>
</template>
  