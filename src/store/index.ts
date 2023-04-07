import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import bungie from './modules/bungie';

export default createStore({
  modules: {
    bungie,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
