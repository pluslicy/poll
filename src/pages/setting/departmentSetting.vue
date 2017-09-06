<template>
  <div class="clazzSetting">
    <div class="ctitle">
      <div class="h2">方向管理 </div>
      <p>hello world</p>
    </div>
    <div class="ccontent">
      <div class="options">
        <el-button type="default" @click="dialogVisible = true">添加</el-button>
        <el-button type="default" @click="updHandler" :disabled="multipleSelection.length == 0">修改</el-button>
        <el-button type="default" @click="confirmDel" :disabled="multipleSelection.length == 0">删除</el-button>
      </div>
      <div class="date">
       <el-table :data="departmentData" style="width: 100%"  @selection-change="handleSelectionChange">
        <el-table-column prop="id" type="selection"></el-table-column>
        <el-table-column prop="name" label="方向名称"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
      </el-table>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
      <el-form :model="form">
        <el-form-item label="方向名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handlerSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import navTab from '../../components/navTab.vue';
import pageModal from '../../components/pageModal';
import {mapGetters} from 'vuex';


export default {
  name: 'hello',
  components:{
    'nav-tab':navTab,
    'page-modal':pageModal
  },
  computed:{
    ...mapGetters([
      'departmentData',
      'departmentInfo'])
  },
  created () {
    this.$store.dispatch('setDepartmentData')
  },
  data () {
    return {
      showModal : false,
      multipleSelection: [],
      dialogVisible: false,
      //表单
      title:'添加方向信息',
      formLabelWidth: '120px',
      form: {
          id: '',
          name: '',
          description: ''
      },
    }
  },
  methods:{
    /**
     * 修改
    */
    updHandler:function(){
      this.$store.dispatch('setDepartmentInfo',this.multipleSelection[0].id).then(()=>{
        console.log(this.$store.getters.departmentInfo);
        this.form.id = this.$store.getters.departmentInfo.id;
        this.form.name = this.$store.getters.departmentInfo.name;
        this.form.description = this.$store.getters.departmentInfo.description;
        this.dialogVisible = true;
      })
     
    },
    /**
     * 处理提交事务
    */
    handlerSubmit(){
      this.$store.dispatch('saveDepartment',this.form)
      this.form = { id: '',name: '',description: ''}
      //关闭窗口
      this.dialogVisible = false
    },
    /**
     * 处理点击单选状态
    */
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClose(done) {
        done();
    },
    confirmDel(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var ids = this.multipleSelection.map(function(item){
            return item.id
          });
          this.$store.dispatch('delDepartment',ids)
          //成功提示
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './css/clazzSetting.css';
@import '../../components/css/table.css'
</style>
