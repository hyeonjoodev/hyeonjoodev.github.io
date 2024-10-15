<template>
  <h1>{{ msg }}</h1>

  <component :is="component" />
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  msg: String
});

const route = useRoute();

const title = route.params.title;

const component = ref();

import(`../../public/${title}.md`).then((module) => {
  component.value = module.default;
});
</script>

<style scoped></style>
