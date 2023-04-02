<template>
  <div class="empty" />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Routes } from '../constants';

const router = useRouter();
const route = useRoute();
const Store = useStore();

onBeforeMount(() => {
  const { code } = route.query;
  if (code) {
    Store.dispatch('bungieCode/setCode', code);
    router.push(Routes.Home);
  }
});
</script>
