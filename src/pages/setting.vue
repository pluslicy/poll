<template>
  <div class="setting">
    <div class="sleft">
      <nav-left>
         <ul>
          <li :class="url==='departmentSetting'?'current':''"><a href="#/setting/departmentSetting">方向设置</a></li>
          <li :class="url==='clazzSetting'?'current':''"><a href="#/setting/clazzSetting">班级设置</a></li>
          <li :class="url==='tcSetting'?'current':''"><a href="#/setting/tcSetting">讲师设置</a></li>
          <li :class="url==='coSetting'?'current':''"><a href="#/setting/coSetting">课程设置</a></li>
          <li :class="url==='qnSetting'?'current':''"><a href="#/setting/qnSetting">问卷设置</a></li>
          <li :class="url==='qTSetting'?'current':''"><a href="#/setting/qTSetting">问卷模板</a></li>
          <li :class="url==='sysSetting'?'current':''"><a href="#/setting/sysSetting">系统设置</a></li>
        </ul>
      </nav-left>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import navLeft from '../components/navLeft.vue';
export default {
  name: 'hello',
  components:{
    'nav-left':navLeft
  },
  data () {
    return {
      url:"departmentSetting"
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': function(){
      this.url = this.$route.path.split('/')[2];
      
    }
  },
  methods:{
    /*
    switchCurrent:function(event){
      if(event.target.nodeName == "A"){
        $(event.target).parent().siblings().removeClass('current');
        $(event.target).parent().addClass('current');
      }
    }
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './css/setting.css'
</style>
