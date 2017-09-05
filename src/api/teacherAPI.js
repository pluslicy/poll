import axios from 'axios'
import qs from 'qs'
//封装
export default {
    //获取所有老师信息
    queryTeachers() {
        return axios.get('manager/queryAllTeachers.action');
    },
    //通过id查询老师信息
    queryTeacherById(id){
    	return axios.post('manager/queryTeacherById.action',{'teacher.id':id});
    },
    //保存或更改教师信息
    saveOrUpdTeacher(form){

    	return axios.post('manager/saveOrUpdTeacher.action',{});
    },
    //批量删除教师信息
    batchDelTeacher(ids){
    	return axios.post('manager/batchDelTeacher.action',{ids});
    }
}