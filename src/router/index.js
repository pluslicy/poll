import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import setting from '@/pages/setting'
import pollManager from '@/pages/pollManager'
import pollStatistics from '@/pages/pollStatistics'
import userInfo from '@/pages/userInfo'
import clazzSetting from '@/pages/setting/clazzSetting'
import departmentSetting from '@/pages/setting/departmentSetting'
import teacherSetting from '@/pages/setting/teacherSetting'
import courseSetting from '@/pages/setting/courseSetting'
Vue.use(Router)


var router = new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/setting',
            name: 'setting',
            component: setting,
            children: [{
                path: 'clazzSetting',
                name: 'clazzSetting',
                component: clazzSetting
            }, {
                path: 'departmentSetting',
                name: 'departmentSetting',
                component: departmentSetting
            }, {
                path: 'tcSetting',
                name: 'teacherSetting',
                component: teacherSetting
            }, {
                path: 'coSetting',
                name: 'courseSetting',
                component: courseSetting
            }]
        },
        {
            path: '/pollManager',
            name: 'pollManager',
            component: pollManager
        },
        {
            path: '/pollStatistics',
            name: 'pollStatistics',
            component: pollStatistics
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: userInfo
        }
    ]
})

router.beforeEach((to, from, next) => {
    next();
})

export default router;