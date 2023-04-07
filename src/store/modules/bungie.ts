/* eslint-disable
  @typescript-eslint/no-explicit-any,
  @typescript-eslint/no-shadow,
  no-param-reassign */
const state = {
  destinyMembershipId: '',
  accessToken: '',
  refreshToken: '',
};

const getters = {
  destinyMembershipId: ({ destinyMembershipId }: any) => destinyMembershipId,
  accessToken: ({ accessToken }: any) => accessToken,
  refreshToken: ({ refreshToken }: any) => refreshToken,
};

const mutations = {
  SET_DESTINY_MEMBERSHIP_ID(state: any, val: any) {
    state.destinyMembershipId = val;
  },
  SET_ACCESS_TOKEN(state: any, val: any) {
    state.accessToken = val;
  },
  SET_REFRESH_TOKEN(state: any, val: any) {
    state.refreshToken = val;
  }
};

const actions = {
  async setDestinyMembershipId(store: any, val: any) {
    store.commit('SET_DESTINY_MEMBERSHIP_ID', val);
  },
  async setAccessToken(store: any, val: any) {
    store.commit('SET_ACCESS_TOKEN', val);
  },
  async setRefreshToken(store: any, val: any) {
    store.commit('SET_REFRESH_TOKEN', val);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
