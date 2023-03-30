import AppConsts from '.././constants/appconst';
let token = localStorage.getItem('token');
import axios from 'axios';
import { Modal } from 'antd';
const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 800000,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
});
http.interceptors.request.use(
  function (config) {
    if (!token) {
      debugger
      config.headers.common['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data.Message) {
      Modal.error({
        title: error.response.data.Message,
        content: error.response.data.Message,
        onOk() {
          Modal.destroyAll();
        },
      });
    }
  }
)
export default http;