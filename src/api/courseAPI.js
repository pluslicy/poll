import axios from 'axios'

export default {
	//查询所有课程信息 ajax 异步（promise es6）
	queryCourses(){
		return axios.get('manager/queryCourses.action');
	},
	//批量删除课程信息
	batchDelCourses(ids){
		return axios.post('manager/batchDelCourses.action',{ids});
	},
	//保存并更新课程信息
	saveOrUpdCourse(course){
		return axios.post('manager/saveOrUpdCourse.action',course);
	},
	queryCourseById(id){
		return axios.post('manager/queryCourseById.action',{'course.id':id});
	}
}