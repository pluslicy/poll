/**
 * 我们组装模块并导出 store 的地方
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import clazz from './modules/clazz'
import department from './modules/department'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        clazz,
        department
    }

})