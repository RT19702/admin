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
    let { username, password } = userInfo;
    // 传参给api/register
    let result = await register(userInfo);
    console.log(result);
    if (result.code == 200) {
      commit('SET_TOKEN', result.data.token);
      setToken('Token', result.data.token);
    } else {
      return Promise.reject(new Error(error));
    }
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}