<template>
  <div id="randomView">
    <div class="sidebar">
      <ul class="options">
        <li class="option">Weapons</li>
        <li class="option">Armor</li>
      </ul>
    </div>

    <div class="display">
      <div v-for="item in items" :key="item" class="card glass">
        This is a card
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [1, 2, 3];
</script>

<style lang="scss">
#randomView {
  display: flex;

  .display {
    display: flex;
    gap: 16px;
    margin: 0 auto;
    max-width: 800px;
    max-width: 800px;
    max-width: 800px;
    width: 100%;
  }
}
</style>
