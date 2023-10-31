import axios from 'axios';

// const axiosClient = axios.create({
//     baseURL: 'https://api.ezfrontend.com/',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

let tokenStr = localStorage.getItem('access_token');
const axiosSchoolClient = axios.create({
    baseURL: 'https://dev-api-pleasespeak.merket.io/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenStr}`,
    },
});

//Interceptors

// Add a request interceptor
axiosSchoolClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosSchoolClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

export default axiosSchoolClient;
