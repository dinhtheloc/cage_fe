import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs
const token = localStorage.getItem('token');
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
        'Authorization': `Basic ${token}`
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    // Handle errors
    if(error.response.status === 403){
        window.location.href = `${process.env.REACT_APP_BASE_HREF}logout`;
    }
    return Promise.reject(error);
});
export default axiosClient;