import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

const request = axios.create({
  timeout: 1000,
});

// 请求拦截
request.interceptors.request.use(config => {
  // 进度条开始
  nprogress.start();
  console.log(config);
  // 在发送请求之前做些什么
  return config;
});

// 响应拦截
request.interceptors.response.use((res) => {
  // 进度条结束
  nprogress.done();
  return res.data
}, (error) => {
  return Promise.reject(new Error(error));
});

export default request