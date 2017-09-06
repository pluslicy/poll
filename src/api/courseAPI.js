import axios from 'axios'

export default {
	//查询所有课程信息 ajax 异步（promise es6）
	queryCourses(){
		return axios.get('manager/queryCourses.action');
	}
}