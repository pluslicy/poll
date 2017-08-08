<template>
  <div id="app">
    <!--头部信息-->
    <header>
      <div class="logo">
        Briup | 课调系统
      </div>
      <div class="searchbar">
        <input type="search" name="search" placeholder="输入您要查找的内容">
      </div>
      <div class="userinfo">
        <img src="./assets/logo.png" alt="miss">
        <span>管理员</span>
      </div>
      <div class="clear"></div>
    </header>
    <!--顶层导航-->
    <nav-top></nav-top>
    <!--分隔条-->
    <div class="navBar"></div>
    <!--二级导航及内容-->
    <router-view></router-view>
    
  </div>
</template>

<script>
import navTop from './components/navTop.vue';
export default {
  name: 'app',
  components:{
    'nav-top':navTop  
  }
}
</script>

<style>
  @import './assets/css/app.css'

</style>
