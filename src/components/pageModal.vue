<template>
  <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!--模态框头部-->
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <!--模态框体部-->
          <div class="modal-body">
            <slot name="body"></slot>
          </div>
           <!--模态框脚部-->
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('close')">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'model',
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
  @import './css/model.css';
</style>
