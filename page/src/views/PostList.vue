<template>
  <h1>files</h1>
  <nav>
    <template v-for="(fileNm, index) in fileNm">
      <RouterLink :to="`/page/${fileNm}`"
        >{{ index + 1 }}.{{ fileNm }}</RouterLink
      >
      &nbsp
    </template>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const files = import.meta.glob('../post/*.md');

const fileNm = ref(
  Object.keys(files).map((value) => value.split('/')[2].split('.')[0])
);
</script>

<style scoped></style>
