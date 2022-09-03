import request from '@/api/request'

export const register = (params) => {
  return request({
    url: '/user/login',
    method: 'get',
    // 接收请求的传参
    data:params
  })
}