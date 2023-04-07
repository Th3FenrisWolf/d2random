import { createRouter, createWebHistory } from 'vue-router';
import * as Views from '../views';
import AcceptCode from '../components/AcceptCode.vue';
import { Routes } from '../constants';

const routes = [
  {
    path: Routes.Home,
    name: 'Home',
    component: Views.HomeView,
    meta: {
      title: 'Home | D2Random',
    },
  },
  {
    path: Routes.AcceptCode,
    name: 'Accept Code',
    component: AcceptCode,
    meta: {
      title: '',
    },
  },
  {
    path: Routes.Loadout,
    name: 'Loadout',
    component: Views.LoadoutView,
    meta: {
      title: 'Loadout | D2Random',
    },
  },
  {
    path: Routes.Random,
    name: 'Random',
    component: Views.RandomView,
    meta: {
      title: 'Random | D2Random',
    },
  },
  {
    path: Routes.NotFound,
    name: 'Not Found',
    component: Views.NotFoundView,
    meta: {
      title: 'Not Found | D2Random',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
