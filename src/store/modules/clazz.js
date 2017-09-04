/**
 * 班级管理数据js
 */
//import clazz from '../../api/clazz'
import clazzAPI from '../../api/clazz'
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
        clazzAPI.ClazzInfo(id).then(res => {
            commit(types.SET_CLAZZ_INFO, res.data)
        });
    },
    getClazzData({ commit }) {
        clazzAPI.Classes().then(function(res) {
            commit(types.GET_CLAZZ_DATA, res.data)
        })
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