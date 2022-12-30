import Vue from 'vue'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import App from './App.vue'
import store from './store';
import i18n from './lang' // internationalization
// mock模拟数据
import '@/mock';
import '@/permission';
// import './icons';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')