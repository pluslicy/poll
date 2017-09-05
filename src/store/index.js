/**
 * 我们组装模块并导出 store 的地方
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import clazzStore from './modules/clazzStore'
import departmentStore from './modules/departmentStore'
import teacherStore from './modules/teacherStore'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        clazzStore,
        departmentStore,
        teacherStore
    }

})