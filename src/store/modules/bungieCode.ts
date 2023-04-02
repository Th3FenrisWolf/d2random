/* eslint-disable
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/no-shadow,
  no-param-reassign */
const state = {
  code: '',
};

const getters = {
  code: ({ code }: any) => code,
};

const mutations = {
  SET_CODE(state: any, val: any) {
    state.code = val;
  },
};

const actions = {
  async setCode(store: any, val: any) {
    store.commit('SET_CODE', val);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
