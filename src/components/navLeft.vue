<template>
  <div class="nav-left" v-on:click="navClickEvent">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hello',
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
