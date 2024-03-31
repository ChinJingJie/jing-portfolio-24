<script setup>
import { ref } from 'vue';

const paragrphs = ref([
  { content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat non libero non venenatis. Vestibulum nec magna quis erat pellentesque condimentum. Mauris at felis ut purus suscipit pulvinar quis at velit. Proin feugiat sapien ut nisl condimentum, nec blandit quam commodo. Nam placerat egestas mauris, sed ullamcorper nisl sollicitudin sit amet. Sed rhoncus viverra risus nec vestibulum. Ut quis ligula rhoncus, rhoncus libero nec, consequat dolor. Pellentesque tincidunt odio id eros porta, id finibus metus gravida. Vivamus sit amet rhoncus mi, congue pharetra sem." },
  { content: "Duis sit amet posuere mauris. Pellentesque in sem quam. Aliquam erat volutpat. Nullam eleifend, metus quis posuere gravida, dui justo aliquam arcu, a vulputate metus sem nec dolor. Sed sollicitudin mattis facilisis. Suspendisse at mauris a mi posuere accumsan scelerisque quis elit. Morbi quis semper metus, quis malesuada risus. Integer id pulvinar lectus. Vestibulum porttitor tortor et consequat luctus. Donec enim justo, aliquet eget arcu vel, pharetra consequat felis. Quisque a finibus neque, sed luctus ipsum. Phasellus sodales, lorem eu scelerisque efficitur, lectus sapien fermentum dolor, quis semper lacus ligula lacinia nisl. Fusce congue massa nec augue molestie gravida. Fusce ac mauris nibh." },
  { content: "Aliquam erat volutpat. Aenean aliquet nunc sit amet lobortis sodales. Aliquam sem nisi, blandit ut lacus sed, blandit interdum nisi. Vestibulum facilisis lorem mi. Praesent eu tellus fringilla, elementum neque at, tempor dolor. Vestibulum placerat sagittis egestas. Nulla vitae pulvinar odio. Vivamus nec est sed tortor accumsan congue. Donec consequat ultricies libero, quis suscipit neque posuere eu. Aenean turpis risus, bibendum sed nulla a, sollicitudin maximus leo. Cras cursus mi quis lectus tincidunt, et malesuada eros tincidunt. Nulla facilisi. Fusce laoreet ex quis arcu tempus semper." },
]);
</script>

<template>
  <div class="relative max-h-screen my-auto md:py-5 md:overflow-y-scroll">
    <h2 class="text-4xl">My Story</h2>
    <div v-for="paragrph in paragrphs" :key="paragrph" >
      <p class="mt-10 text-l">{{ paragrph.content }}</p>
    </div>
  </div>
</template>
