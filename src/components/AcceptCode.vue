<template>
  <div class="empty" />
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { AxiosResponse } from 'axios';
import { BungieAuthResponse, Routes } from '../constants';
import { authorizeUser } from '../services/api-service';

const router = useRouter();
const route = useRoute();
const Store = useStore();

onBeforeMount(() => {
  const { code } = route.query;
  if (code) {
    Store.dispatch('bungie/setDestinyMembershipId', code);
    authorizeUser(code as string).then((response) => {
      const resp = response as AxiosResponse<BungieAuthResponse>;
      if (resp.status === 200) {
        Store.dispatch('bungie/setAccessToken', resp.data.access_token);
        Store.dispatch('bungie/setRefreshToken', resp.data.refresh_token);
      }
    });
    router.push(Routes.Home);
  }
});
</script>

<!-- const refresh = () =>
  refreshAuthorizationToken(destinyRefreshToken.value).then((response) => {
    if (response.status === 200) {
      Store.dispatch('bungie/setAccessToken', response.data.access_token);
      Store.dispatch('bungie/setRefreshToken', response.data.refresh_token);
    }
  }); -->
