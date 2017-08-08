<template>
  <button class="pageBtn btn" @click="pageBtnClickEvent">
      <slot></slot>
  </button>
    
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  methods:{
    pageBtnClickEvent: function(event){
        this.$emit('pageBtnClickEvent',event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './css/pageBtn.css';
  @import '../assets/css/font-awesome.min.css';
  
</style>
