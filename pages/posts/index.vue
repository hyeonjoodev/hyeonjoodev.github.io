<template>
  <h3>Category</h3>

  <h2>Post List</h2>
  <ContentList path="/posts" v-slot="{ list }">
    <div v-for="article in list" :key="article._path">
      <NuxtLink :to="article._path">
        <h2>{{ article.title }}</h2>
      </NuxtLink>
      <p>{{ article.description }}</p>
    </div>
  </ContentList>
</template>

<script setup>
const myQuery = queryContent('posts');
</script>
