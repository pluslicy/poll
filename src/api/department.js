import axios from 'axios'
import qs from 'qs'

//封装
export default {
    getDepartmentById(id) {
        /**
            By default, axios serializes JavaScript objects to JSON. To send data in the application/x-www-form-urlencoded format instead, you can use one of the following options.
            var qs = require('qs');
            axios.post('/foo', qs.stringify({ 'bar': 123 }));
        */
        //return axios.post("manager/queryDepartmentById.action",qs.stringify( { 'department.id': id }));
        return axios.post("manager/queryDepartmentById.action",{ 'department.id': id });
    },
    getDepartment() {
        return axios.get("manager/queryDepartment.action");
    },
    postDepartment(form) {
        var dep = {};
        for (var key in form) {
            dep['department.' + key] = form[key]
        }
        return axios.post("manager/saveOrUpdDepartment.action", dep);
    },
    delDepartment(ids) {
        return axios.post("manager/batchDelDepartment.action", { ids: ids });
    }
}