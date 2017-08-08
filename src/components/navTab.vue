<!--选项卡导航-->
<template>
  <div class="nav-tab" v-on:click="navClickEvent">
    <div>
      <slot></slot>
    </div>
    <div>
      <!--三级导航及内容-->
      <router-view></router-view>
    </div>   
  </div>
    
</template>

<script>
export default {
  name: 'navTab',
  data () {
    return {
    }
  },
  methods:{
    navClickEvent:function(event){
      this.$emit('navClickEvent',event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../assets/css/font-awesome.min.css';
  @import './css/navLeft.css';
</style>
