import axios from "axios";
import { cookie } from "@/utils/cookie.js"

const request = axios.create({
  baseURL: '/api',
  timeout: 30000,
});
request.interceptors.request.use(
  function (config) {
    config.headers['Authorization']=cookie.get('token')
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
const get = (url, params) => request.get(url, { params });
const post = (url, data) => request.post(url, data);
const del = (url, params) => request.delete(url, { params });

export { get, post, del };