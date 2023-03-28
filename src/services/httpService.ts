import AppConsts from '.././constants/appconst';
// import { L } from '../lib/abpUtility';
let token = localStorage.getItem('token');
import { Modal } from 'antd';
import axios from 'axios';


const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 800000,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
//   paramsSerializer: function (params: string) {
//     return qs.stringify(params, {
//       encode: false,
//     });
//   },
});

http.interceptors.request.use(
//   function (config) {
//     if (!!abp.auth.getToken()) {
//       config.headers.common['Authorization'] = 'Bearer ' + abp.auth.getToken();
//     }

//     config.headers.common['.AspNetCore.Culture'] = abp.utils.getCookieValue('Abp.Localization.CultureName');
//     config.headers.common['Abp.TenantId'] = abp.multiTenancy.getTenantIdCookie();
//     return config;
//   },
//   function (error) {
    
//     return Promise.reject(error);
//   }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    ;
    if (!!error.response && !!error.response.data.error && !!error.response.data.error.message && error.response.data.error.details) {
      Modal.error({
        title: error.response.data.error.message,
        content: error.response.data.error.details,
        onOk() {
          Modal.destroyAll();
        },
      });
    } else if (!!error.response && !!error.response.data.error && !!error.response.data.error.message) {



    //   Modal.error({
    //     title: L('Error'),
    //     content: error.response.data.error.message,
    //      onOk: () =>  {
    //       Modal.destroyAll();
    //       if (!error.response.data.success) {
    //         Modal.destroyAll();
    //       }
    //       if (!error.response.data.error.code) {
    //         Modal.destroyAll();
    //       }

    //       if (error.response.data.error.message === 'Current user did not login to the application!') {

    //         window.location.href = '/';
    //       }
    //     },

    //   });

      // if (error.response.data.error.message === 'An internal error occurred during your request!') {

      //   setTimeout(() => {
      //     Modal.destroyAll();
      //   }, 2000);
      //   setTimeout(() => {
      //     window.location.href = '/';
      //   }, 3000);
      //  }

      // if(error.response.data.error.message ==="there is already Task Ticket Template entered with that name"){
      //   Modal.destroyAll();
      //   window.location.href = '/';
      // }
    } 
    // else if (!error.response) {
    //   Modal.error({
    //     content: L(error.message),
    //     onOk() {
    //       Modal.destroyAll();
    //     },
    //   });
    //   return Promise.reject(error);
    // } else {
    //   return Promise.reject(error);
    // }

    // if (error.response.data.error.message === 'Login failed!') {
    // }
    return error.response;
  }
);

export default http;