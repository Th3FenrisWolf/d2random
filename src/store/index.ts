import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import bungieCode from './modules/bungieCode';

export default createStore({
  modules: {
    bungieCode,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
