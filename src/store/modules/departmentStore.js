/**
 * 部门管理数据js
 */
import configAPI from '../../api/configAPI'
import departmentAPI from '../../api/departmentAPI'
import * as types from '../mutation-types'

// initial state
const state = {
    departmentData: [],
    departmentInfo: localStorage.getItem("departmentInfo") || {}
}

// getters
const getters = {
    departmentData: state => state.departmentData,
    departmentInfo: state => state.departmentInfo
}

// actions
const actions = {
    setDepartmentDataPromise({commit}){
        return new Promise((resolve,reject)=>{
            departmentAPI.getDepartment().then((resp) => {
                commit(types.SET_DEPARTMENT_DATA, resp.data);
                resolve();
            });
        })
    },
    setDepartmentData({ commit }) {
        departmentAPI.getDepartment().then((resp) => {
            commit(types.SET_DEPARTMENT_DATA, resp.data)
        });
    },
    setDepartmentInfo({ commit }, id) {
        return new Promise((resolve, reject) => {
            departmentAPI.getDepartmentById(id).then((resp) => {
                commit(types.SET_DEPARTMENT_INFO, resp.data);
                resolve();
            })
        })
    },
    saveDepartment({ dispatch, commit }, form) {
        departmentAPI.postDepartment(form).then((resp) => {
            //添加成功
            dispatch('setDepartmentData')
        });
    },
    delDepartment({ dispatch, commit }, ids) {
        departmentAPI.delDepartment(ids).then((resp) => {
            dispatch('setDepartmentData')
        })
    }
}

const mutations = {
    [types.SET_DEPARTMENT_INFO](state, data) {
        state.departmentInfo = data;
        localStorage.setItem('departmentInfo', data);
    },
    [types.SET_DEPARTMENT_DATA](state, data) {
        state.departmentData = data;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
};