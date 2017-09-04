import axios from 'axios'
import qs from 'qs'

export default {
    //获取班级信息
    ClazzInfo(id) {
        return axios.get('http://127.0.0.1:8888/poll/manager/getClazzById', { 'clazz.id': id });
    },
    Classes() {
        return axios.get('http://127.0.0.1:8888/poll/manager/queryClass.action');
    }
}