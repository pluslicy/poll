<template>
  <div class="setting">
    <div class="sleft">
      <nav-left v-on:navClickEvent='switchCurrent'>
         <ul>
          <li class="current"><a href="javascript:void(0)">我的信息</a></li>
          <li><a href="javascript:void(0)">密码修改</a></li>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    switchCurrent:function(event){
      if(event.target.nodeName == "A"){
        $(event.target).parent().siblings().removeClass('current');
        $(event.target).parent().addClass('current');
      }
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './css/setting.css'
</style>
