import router from "@/router";
import store from "@/store";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
import { getToken } from "@/utils/auth"

nprogress.configure({ showSpinner: false }); // 显示右上角螺旋加载提示
//白名单
const whiteList = ['/login', '/auth-redirect'] // 无重定向的名单

// 路由拦截器
router.beforeEach((to, from, next) => {
  nprogress.start()
  const hasToken = getToken('Token');
  //判断token是否存在
  if (hasToken) {
    //判断是否是登录
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    /* has no token*/
    //如果token不存在，判断是否存在白名单中
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next("/login");
    }
  }
  nprogress.done();
})