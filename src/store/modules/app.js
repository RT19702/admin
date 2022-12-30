import Cookies from 'js-cookie'
import { getLanguage } from '@/lang/index'

const state = {
    isCollapse: true,
    language: getLanguage(),
}

const mutations = {
    fold(state) {
        state.isCollapse = !state.isCollapse;
    },
    SET_LANGUAGE: (state, language) => {
        state.language = language
        Cookies.set('language', language)
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    // actions
}