// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import $ from 'jquery' //jquery 2017.7.31
import ElementUI from 'element-ui' //ui插件  2017.8.1
import 'element-ui/lib/theme-default/index.css'
//import axios from 'axios' //ajax插件 2017.8.3
//Vue.prototype.$http = axios //将axios绑定在Vue原型的$http上
import store from './store/index.js'
//全部引入
Vue.use(ElementUI)
    //部分引入element-ui
    /**
     * 
    import {
        Button,
        Select,
        Table,
        TableColumn,
        Dialog,
        Form,
        FormItem,
    } from 'element-ui' //2017.8.1

    Vue.use(Button)
    Vue.use(Select)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Dialog)
    Vue.use(Form)
    Vue.use(FormItem)

     */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})