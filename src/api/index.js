import request from '@/utils/request'

// 登录
export const register = (params) => {
  return request({
    url: '/user/login',
    method: 'get',
    // 接收请求的传参
    data: params
  })
}

export const listData = () => {
  return request({
    url: '/get/list',
    method: 'get',
  })
}