import { createRouter, createWebHistory } from 'vue-router';
import {
  HomeView,
  LoadoutView,
  NotFoundView,
} from '../views';
import AcceptCode from '../components/AcceptCode.vue';
import { Routes } from '../constants';

const routes = [
  {
    path: Routes.Home,
    name: 'Home',
    component: HomeView,
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
    component: LoadoutView,
    meta: {
      title: 'Loadout | D2Random',
    },
  },
  {
    path: Routes.NotFound,
    name: 'Not Found',
    component: NotFoundView,
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
