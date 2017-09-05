import axios from 'axios'
import qs from 'qs'

export default {
    //获取班级信息
    ClazzInfo(id) {
        return axios.get('manager/getClazzById', { 'clazz.id': id });
    },
    Classes() {
        return axios.get('manager/queryClass.action');
    },
    deleteClasses(ids){
    	return axios.post("manager/batchDelClass.action", { ids: ids });
    },
    postClazz(form){
    	var dep = {};
        for (var key in form) {
        	if(key == 'charge' || key == 'department'){
        		dep['clazz.'+key+'.id'] = form[key]['id'];
        		continue;
        	}
        	if(key == 'beginDate'){
        		dep['clazz.'+key] = form[key].toLocaleString();
        	}
            dep['clazz.' + key] = form[key]
        }
    	console.log(dep);
    	return axios.post('manager/saveOrUpdClass.action', dep);
    }
}