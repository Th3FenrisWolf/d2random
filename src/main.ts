import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import router from './router';
import store from './store';
import App from './App.vue';

router.beforeEach((to, _, next) => {
  const requiresAuth = to.matched.some((r) => r.meta.requiresAuth);
  const userLoggedIn = store.getters['user/isLoggedIn'];
  const nearestWithTitle = to.matched.slice().reverse()
    .find((r) => r.meta && r.meta.title);

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]'))
    .map((el: Element) => el.parentNode?.removeChild(el));

  if (requiresAuth && !userLoggedIn) {
    next('/home');
  } else {
    next();
  }
});

const vuetify = createVuetify({
  components,
  directives,
});

library.add(faMagnifyingGlass, faUser);

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
