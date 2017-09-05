/**
 * 班级管理数据js
 */
import configAPI from '../../api/configAPI'
import clazzAPI from '../../api/clazzAPI'
import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
    //班级信息
    clazzInfo: JSON.parse(localStorage.getItem('clazzInfo')) || {},
    clazzData: []
}

// getters
const getters = {
    clazzInfo: state => state.clazzInfo,
    getClazzData: state => state.clazzData
}

// actions
const actions = {
    setClazzInfo({ commit }, id) {
        return new Promise((resolve,reject)=>{
            clazzAPI.ClazzInfo(id).then((res) => {
                commit(types.SET_CLAZZ_INFO, res.data)
                resolve();
            });
        });
        
    },
    getClazzData({ commit }) {
        clazzAPI.Classes().then((res)=> {
            commit(types.GET_CLAZZ_DATA, res.data)
        })
    },
    delClazzInfo({dispatch,commit}, ids){
        clazzAPI.deleteClasses(ids).then((res)=>{
            dispatch('getClazzData');
        });
    },
    saveClazz({ dispatch, commit }, form) {
        clazzAPI.postClazz(form).then((resp) => {
            //添加成功
            dispatch('getClazzData');
        });
    }

}

//mutations 突变
const mutations = {
    [types.SET_CLAZZ_INFO](state, res) {
        state.clazzInfo = res;
    },
    [types.GET_CLAZZ_DATA](state, res) {
        state.clazzData = res;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
};