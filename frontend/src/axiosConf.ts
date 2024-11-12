import axios, { AxiosHeaders, AxiosRequestHeaders } from 'axios';

// Next we make an 'instance' of it
const axiosConf = axios.create({
// .. where we make our configurations
    // baseURL: process.env.REACT_APP_BASE_URL + '/api'
    baseURL: '/api'
    
});


axiosConf.defaults.headers.common = {
    ...axiosConf.defaults.headers.common,
    "Access-Control-Allow-Origin" : "*", 
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PATCH', 
    "Access-Control-Expose-Headers":"*"
}

const changableActionsList:string[] = ['post', 'patch', 'delete']

export default axiosConf;