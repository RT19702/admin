import Vue from "vue";
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import zhLocale from "./zn"
import enLocale from "./en"
import Cookies from 'js-cookie'
Vue.use(VueI18n);   // 全局注册国际化包

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    zh: {
        ...zhLocale,
        ...elementZhLocale
    }
}

// 获取语言
export function getLanguage() {
    const chooseLanguage = Cookies.get('language')
    if (chooseLanguage) return chooseLanguage

    const language = (navigator.language || navigator.browserLanguage).toLowerCase()
    const locales = Object.keys(messages)
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }
    return 'en'
}

// 准备翻译的语言环境信息
const i18n = new VueI18n({
    locale: getLanguage(),   // 初始化中文
    messages
});

export default i18n