import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/',
      component: () => import('@/page/Main.vue'),
      meta:{
        title:'首页'
      },
      children: [{
        path: '/user',
        component: () => import('@/page/User'),
        meta:{
          title:'个人中心'
        }
      }, ]
    },
    {
      path: '/login',
      component: () => import('@/page/Login')
    },
    {
      // 路由重定向
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})