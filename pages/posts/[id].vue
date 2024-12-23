<template>
  <p><nuxt-link to="/posts">posts</nuxt-link></p>
  <ContentDoc :path="id" />
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route);
const id = route.path;
</script>
