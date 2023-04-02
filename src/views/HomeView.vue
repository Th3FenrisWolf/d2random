<template>
  <div id="home-view">
    <h1>Welcome To The Soon-To-Be D2Random!</h1>

    <h2>More to come soon!</h2>
  </div>
  <button type="button" @click="() => logBungieCode()">
    Log Bungie Code
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const Store = useStore();

const bungieCode = computed(() => Store.getters['bungieCode/code']);

const logBungieCode = () => console.log(bungieCode.value);

</script>

<style>
#home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
