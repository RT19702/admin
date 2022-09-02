import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/',
      component: () => import('@/pages/Main.vue'),
      children: [{
        path: '/user',
        component: () => import('@/pages/User'),
      }, ]
    },
    {
      path: '/login',
      component: () => import('@/pages/Login')
    },
    {
      // 路由重定向
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})