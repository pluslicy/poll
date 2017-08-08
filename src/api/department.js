import axios from 'axios'
import qs from 'qs'
//拦截器
axios.interceptors.request.use((config) => {
    console.log("interceptor....");
    /*
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    */
    return config;
});

//封装
export default {
    getDepartmentById(id) {
        return axios.post("http://127.0.0.1:8888/poll/manager/queryDepartmentById.action", { 'department.id': id });
    },
    getDepartment() {
        return axios.get("http://127.0.0.1:8888/poll/manager/queryDepartment.action");
    },
    postDepartment(form) {
        var dep = {};
        for (var key in form) {
            dep['department.' + key] = form[key]
        }
        return axios.post("http://127.0.0.1:8888/poll/manager/saveOrUpdDepartment.action", dep);
    },
    delDepartment(ids) {
        return axios.post("http://127.0.0.1:8888/poll/manager/batchDelDepartment.action", { ids: ids });
    }
}