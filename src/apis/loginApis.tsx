import axios from 'axios';
import AppConsts from '.././constants/appconst';
export const create = async (data: any) => {
  const queryString = new URLSearchParams(data).toString();
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: AppConsts.remoteServiceBaseUrl+'/token',
    headers: {
      Authorization:
        'Bearer shee1-XstTC3pCo6Xz0iG7SBwMq8nfnguxXc2JUrQCuAiKp_rJlY7pUPTU6-XFU1AYhg6ZZHiwV9sb7CmIPoGjvgp2MSB2VBXOgqwa66DuLPIPu9hjayReJpJ9_9BEV-eoZNe5jrB8kvhxE5QxUQeEX-YGY1cQ_paIJH1ABeo-wXQKo1PCQhwFmImNULwd1RaZvl9aj16aW94Uehqr_nynKvsqga8JYa4f2mp7TEdP-MIvwLmD3mZJP8ApC9C6LwpT55Oxo7NPnSqgs-LIzbbbJm-FSLm4XD_fJ9UqzGZljxsycAwl7ir2agjqwkJvXAw1jqRpQoIO0pVsmJAm9epElGeD3oAiUhU1eL1lRJjGyo0MrUdxemRhLT4pvZ6e6cM45Rthj1GgkfPf33kR2AD71hRysD5WPB4qDLG8fHoptqDfw7VETpimFDjMn8NFo-C4Jugj05D2CAVdbVQ47rT7ACdlIuRg8oRDa2cAIl-AcB3grxnUP7S5T4LBC_onM0dsLwfidF_f1WkV91AsMz07yX9bk4uPD66F_OQ8eQAgxJlyeNizqW8_4WMnKr9ZV6mgtoQf2Y60WXc-2hvdVgc-l840_tURzfOSsbyVtKv72HqazCpZti0nQn3mxq6Ied0srKU-UWQH_k-Dvy-B3aKSZutyu1IUsa-Bm3T6TQo8jv0Wln_CQ8Xvm4rdAGX2l0',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: queryString,
  };
  let res = await axios.request(config);
  return res.data;
};
