import http from './httpService';
class customerApis {
    public getData = async (data: any) => {
        let data1 = JSON.stringify({
            "OrganizationId": 9,
            "CompanyId": 9
        });
        let res = await http.post('api/COAAllocation/AccountsComboFill', data1)
        console.log(res)
        return res
    };
}
export default new customerApis();