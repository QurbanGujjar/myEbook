import axios from 'axios';
let token = localStorage.getItem('token');
import http from '../services/httpService';
// const customerApis = axios.create({
//   baseURL: 'http://5.161.113.248:97',
//   headers: {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',
//   },
// });
//  axios.defaults.headers.common
class customerApis {
    public getData = async (data: any) => {
        let data1 = JSON.stringify({
            "OrganizationId": 9,
            "CompanyId": 9
        });
        // let config = {
        //   method: 'post',
        //   maxBodyLength: Infinity,
        //   url: 'http://5.161.113.248:97/api/COAAllocation/AccountsComboFill',
        //   headers: { 
        //     Authorization: `Bearer ${token}`,
        //     'Content-Type': 'application/json'
        //   },
        //   data : data1
        // };

        // let res = await axios.request(config);

        // return res;

        let res = await http.post('api/COAAllocation/AccountsComboFill', data1)
        debugger
        console.log(res)
        return res

    };
}
export default new customerApis();