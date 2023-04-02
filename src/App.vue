<template>
  <app-bar />

  <div id="main">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap');

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Lexend', sans-serif;

  --purple: #242343;
  --purple-50: #24234380;
  --gray: #6b7f82;
  --gray-dark: #333;
  --gray-dark-50: #33333380;
  --red: #ff6b6b;
  --blue: #b8f3ff;
  --white: #f2f2f2;
  --white-50: #f2f2f280;
  --white-10: #f2f2f21a;

  background-color: var(--purple);
  color: var(--white);
}
</style>
