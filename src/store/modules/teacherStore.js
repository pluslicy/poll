/**
 * 班级管理数据js
 */
//import clazz from '../../api/clazz'
import teacherAPI from '../../api/teacherAPI'
import * as types from '../mutation-types'

const state = {
    //班级信息
    teacherData: []
}

// getters
const getters = {
    teacherData: state => state.teacherData
}

// actions
const actions = {
    fetchTeacherData({ commit }) {
        teacherAPI.queryTeachers().then(function(res) {
            commit(types.FETCH_TEACHER_DATA, res.data)
        })
    }

}

//mutations 突变
const mutations = {
    [types.FETCH_TEACHER_DATA](state, data) {
        state.teacherData = data;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
};