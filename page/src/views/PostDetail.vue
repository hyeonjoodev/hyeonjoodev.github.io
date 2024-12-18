<template>
  [
  <RouterLink :to="{ name: 'PostList' }"> PostList</RouterLink>
  ]
  <h1>{{ title }}</h1>
  <div class="box">
    <component :is="component" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = route.params.title;

const component = ref();

import(`../post/${title}.md`).then((module) => {
  component.value = module.default;
});
</script>

<style scoped>
.box {
  border: 5px solid black;
}
</style>
