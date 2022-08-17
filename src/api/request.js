import axios from "axios";

const request = axios.create({
  baseURL: 'api',
  timeout: 5000,
});

// 请求拦截
request.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
});

// 响应拦截
request.interceptors.response.use((res) => {
  return response;
}, (error) => {
  return Promise.reject(new Error(error));
});

export default request