import request from '@/api/request'

export const register = (data) => {
  return request({
    url: '/user/login',
    method: 'get',
    data
  })
}