import axios from 'axios'
import qs from 'qs'
//封装
export default {
    //获取所有老师信息
    queryTeachers() {
        return axios.get('manager/queryAllTeachers.action');
    }
}