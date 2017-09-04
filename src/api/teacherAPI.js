import axios from 'axios'
import qs from 'qs'
//封装
export default {
    //获取所有老师信息
    queryTeachers() {
        return axios.get('http://127.0.0.1:8888/poll/manager/queryAllTeachers.action');
    }
}