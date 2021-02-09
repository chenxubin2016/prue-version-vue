import axios from 'axios';
import qs from 'qs';
import store from '@/vuex';
// 取消请求
console.log(store.state.token);
let CancelToken = axios.CancelToken,
  source = CancelToken.source(),
  // 基础配置
  request = axios.create({
    baseURL: process.env.url,
    withCredentials: true,
    timeout: 600000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data) {
      // 对 data 进行任意转换处理
      return qs.stringify(data);
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
      // 对 data 进行任意转换处理
      return JSON.parse(data);
    }],
    cancelToken: new CancelToken(function (cancel) {
      // console.log(cancel)
    })
  });
// 添加请求拦截
request.interceptors.request.use(function (config) {
  console.log(config);
  config.headers.token = store.state.token;
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 添加响应拦截
request.interceptors.response.use(function (response) {
  console.log(response);
  if (response.data.code === 200 || response.data.code === 1001) {
    return response.data;
  }
  throw new Error(response.data.msg);
}, function (error) {
  return Promise.reject(error);
});
export const get = (url, data) => {
  return request.get(url, data, {
    // 取消请求
    cancelToken: source.token
  });
};
export const post = (url, data) => {
  return request.post(url, data, {
    // 取消请求
    cancelToken: source.token
  });
};
export const del = (url, data) => request.delete(url, data);
export const head = (url, data) => request.head(url, data);
export const option = (url, data) => request.options(url, data);
export const put = (url, data) => request.put(url, data);
export const patch = (url, data) => request.patch(url, data);
// 取消请求
export const cancel = str => {
  source.cancel(str);
};
