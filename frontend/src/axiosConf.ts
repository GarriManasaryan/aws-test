import axios, { AxiosHeaders, AxiosRequestHeaders } from 'axios';

const axiosConf = axios.create({

    // no nginx
    baseURL: process.env.REACT_APP_BASE_URL + '/api'

    // nginx
    // baseURL: '/api'
    
});


axiosConf.defaults.headers.common = {
    ...axiosConf.defaults.headers.common,
    "Access-Control-Allow-Origin" : "*", 
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PATCH', 
    "Access-Control-Expose-Headers":"*"
}

const changableActionsList:string[] = ['post', 'patch', 'delete']

export default axiosConf;