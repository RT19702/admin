import requests from '@/api/request'

export const test = () => {
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'GET'
  })
}