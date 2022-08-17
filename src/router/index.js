import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/',
      component: () => import('@/pages/Main.vue'),
    },
    {
      // 路由重定向
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})