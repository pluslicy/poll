
import configAPI from '../../api/configAPI'
import courseAPI from '../../api/courseAPI'
import * as types from '../mutation-types'

export default {
	//单一状态树
	state : {
		courses:[],
		course:null
	},
	//动作，作为vue与axios之间的一个桥梁
	actions:{
		queryCourses({commit}){
			courseAPI.queryCourses().then(function(resp){
				commit('set_courses',resp.data)
			});
		},
		//批量删除课程
		batchDelCourses({commit,dispatch},ids){
			courseAPI.batchDelCourses(ids).then(function(resp){
				dispatch('queryCourses');
			});
		},
		saveOrUpdCourse({commit,dispatch},form){
			var course = {};
			for(var key in form){
				course['course.'+key] = form[key];
			}
			courseAPI.saveOrUpdCourse(course).then(function(resp){
				dispatch('queryCourses');
			});
		},
		queryCourseById({commit},id){
			return new Promise(function(resolve,reject){
				courseAPI.queryCourseById(id).then(function(resp){
					commit('set_course',resp.data);
					resolve();
				});
			});
			
		}
	},
	//突变，更改state的唯一方式
	mutations:{
		set_courses(state,data){
			state.courses = data;
		},
		set_course(state,data){
			state.course = data;
		}
	},
	//获取器
	getters:{
		courses(state){
			return state.courses;
		},
		course(state){
			return state.course;
		},
	}
}