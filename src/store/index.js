import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

import tab from "./tab/index";
import user from "./user/index";

export default new Vuex.Store({
  modules: {
    tab,
    user
  },
});