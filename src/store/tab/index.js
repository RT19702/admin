const state = {
  isCollapse: true
};
const mutations = {
  fold(state) {
    state.isCollapse = !state.isCollapse;
  }
};
const actions = {};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}