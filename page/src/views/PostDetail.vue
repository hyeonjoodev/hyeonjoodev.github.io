<template>
  [
  <RouterLink :to="{ name: 'PostList' }"> PostList</RouterLink>
  ]
  <h1>{{ title }}</h1>
  <div class="box">
    <div v-html="html" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = route.params.title;

const html = ref();

import(`../post/${title}.md`).then((module) => {
  html.value = module.html;
});
</script>

<style scoped>
.box {
  border: 5px solid black;
}
</style>
