import { listData } from "@/api";

const state = {
  listItem: []
};
const mutations = {
  LISTITEM(state, data) {
    state.listItem = data;
  }
};
const actions = {
  async listItem({ commit }, userInfo) {
    // 传参给api/register
    let result = await listData(userInfo);
    console.log(result);
    if (result.code == 200) {
      commit('LISTITEM', result.data);
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