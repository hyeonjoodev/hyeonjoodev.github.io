<template>
  <h1>MENU</h1>
  <ul>
    <li>
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/posts">Posts</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/about">Adout</NuxtLink>
    </li>
  </ul>
  <slot />
  <h1>Footer</h1>
</template>

<script setup>
import { useRouter } from 'vue-router';

const $router = useRouter();
</script>
