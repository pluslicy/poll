<template>
  <div class="nav-top">
    <ul>
      <li class="current" v-on:click="switchCurrent">
        <div><a href="#/setting" class="fa fa-cog fa-2x"></a></div>
        <p><a href="#/setting/departmentSetting" >设置</a></p>
      </li>
      <li v-on:click="switchCurrent">
        <div><a href="#/pollManager" class="fa fa-address-book fa-2x"></a></div>
        <p><a href="#/pollManager">课调管理</a></p>
      </li>
      <li v-on:click="switchCurrent">
        <div><a href="#/pollStatistics" class="fa fa-bar-chart fa-2x"></a></div>
        <p><a href="#/pollStatistics">课调统计</a></p>
      </li>
       <li v-on:click="switchCurrent">
        <div><a href="#/userInfo" class="fa fa-user-o fa-2x"></a></div>
        <p><a href="#/userInfo">用户</a></p>
      </li>
      <div class="clear"></div>
    </ul>
  </div>
    
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  methods:{
    switchCurrent:function(event){
      if(event.target.nodeName == 'A'){
        $(event.target).parents('li').addClass('current').siblings().removeClass('current');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './css/navTop.css';
  @import '../assets/css/font-awesome.min.css';
  
</style>
