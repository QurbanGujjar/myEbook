import AppConsts from '.././constants/appconst';
let token = localStorage.getItem('token');
debugger
import axios from 'axios';

const http = axios.create({
  baseURL: AppConsts.remoteServiceBaseUrl,
  timeout: 800000,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
});
export default http;