import { register } from "@/api";
import { setToken, getToken } from '@/utils/auth';

const state = {
  token: getToken(),
};
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
};
const actions = {
  async login({ commit }, userInfo) {
    // 传参给api/register
    let result = await register(userInfo);
    if (result.code == 200) {
      commit('SET_TOKEN', result.data.token);
      setToken('Token', result.data.token);
    } else {
      return Promise.reject(new Error('error'));
    }
  }
};
const getters = {};

export default {
  // 开启带命名空间的模块,默认模块是全局命名空间
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}