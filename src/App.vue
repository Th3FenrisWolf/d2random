<template>
  <app-bar />

  <div id="main">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue';
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap');

body {
  // BEGIN GLOBAL FONT
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Lexend', sans-serif;
  font-size: 16px;
  // END GLOBAL FONT

  // BEGIN GLOBAL COLORS
  --purple: #242343;
  --purple-50: #24234380;

  --gray: #6b7f82;
  --gray-dark: #333;
  --gray-dark-50: #33333380;

  --red: #ff6b6b;
  --red-50: #ff6b6b80;

  --blue: #b8f3ff;

  --white: #f2f2f2;
  --white-10: #f2f2f21a;
  --white-50: #f2f2f280;
  // END GLOBAL COLORS

  --standard-transition: all 0.15s cubic-bezier(0.6, 0, 0.6, 1.6);

  // BEGIN GLOBAL STYLES
  background-color: var(--purple);
  color: var(--white);

  *:focus-visible {
    outline: 2px solid var(--red);
    outline-offset: -1px;
    border-radius: 20px;
    box-shadow: 0 0 2px var(--red), 0 0 4px var(--red), 0 0 6px var(--red),
      0 0 8px var(--red), 0 0 10px var(--red);
  }

  button:has(svg) {
    color: var(--white);
    font-size: 16px;
  }

  .card {
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 224px;
    justify-content: center;
    padding: 16px;
    width: 224px;
  }

  .glass {
    backdrop-filter: blur(7px);
    background-color: var(--white-10);
    box-shadow: 5px 5px 25px var(--gray-dark-50);
    color: var(--white);
    outline: none;
    position: relative;

    border: none;
    border-top: 1px solid var(--white-50);
    border-left: 1px solid var(--white-50);
  }

  .glow-stick-red::before {
    content: '';
    position: absolute;
    background-color: var(--red);
    border-radius: 5px;
    box-shadow: 0 0 2px var(--red), 0 0 4px var(--red), 0 0 6px var(--red),
      0 0 8px var(--red), 0 0 10px var(--red);
  }
  // END GLOBAL STYLES
}
</style>
