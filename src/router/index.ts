import { createRouter, createWebHistory } from 'vue-router';
import {
  DashboardView,
  HomeView,
  NotFoundView,
} from '../views';
import { Routes } from '../constants';

const routes = [
  {
    path: '/',
    redirect: Routes.dashboard,
  },
  {
    path: Routes.dashboard,
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      title: 'Dashboard | CM Control Center',
      requiresAuth: true,
    },
  },
  {
    path: Routes.home,
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home | CM Control Center',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFoundView,
    meta: {
      title: 'Not Found | CM Control Center',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
