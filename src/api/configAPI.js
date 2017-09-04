import axios from 'axios'
import qs from 'qs'
//拦截器
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://127.0.0.1:8888/poll';
axios.interceptors.request.use((config) => {
    console.log(config);
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

export default {}