<template>
  <div class="clazzSetting">
    <div class="ctitle">
      <div class="h2">课程管理 </div>
      <p>hello world</p>
    </div>
    <div class="ccontent">
      <div class="options">
        <el-button type="default" @click="dialogVisible = true">添加</el-button>
        <el-button type="default" @click="updHandler" :disabled="multipleSelection.length == 0">修改</el-button>
        <el-button type="default" @click="confirmDel" :disabled="multipleSelection.length == 0">删除</el-button>
      </div>
      <div class="date">
       <el-table :data="courses" style="width: 100%"  @selection-change="handleSelectionChange">
        <el-table-column prop="id" type="selection"></el-table-column>
        <el-table-column prop="name" label="课程名称"></el-table-column>
        <el-table-column prop="description" label="课程描述"></el-table-column>
        <el-table-column prop="cycle" label="周期"></el-table-column>
      </el-table>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogVisible" size="tiny">
      <el-form :model="form">
        <el-form-item label="课程名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="课程周期" :label-width="formLabelWidth">
          <el-input v-model="form.cycle" auto-complete="off"></el-input>
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
import {mapGetters} from 'vuex';


export default {
  name: 'hello',
  components:{},
  computed:{
    ...mapGetters([
      'courses',//所有课程信息
      'course'])//当前课程信息
  },
  created () {
    //调用vuex中的action执行数据突变（查询所有课程信息，将其设置到courses属性中）
    this.$store.dispatch('queryCourses');
  },
  data () {
    return {
      multipleSelection: [],  //存放复选框的值
      dialogVisible: false,   //显示模态框
      //表单
      title:'添加课程信息',
      formLabelWidth: '120px',
      form: {
          id: '',
          name: '',
          description: '',
          cycle:''
      },
    }
  },
  methods:{
    /**
     * 修改
    */
    updHandler:function(){
      this.$store.dispatch('setDepartmentInfo',this.multipleSelection[0].id).then(()=>{
        
        this.dialogVisible = true;
      })
     
    },
    /**
     * 处理提交事务
    */
    handlerSubmit(){
      
      //关闭窗口
      this.dialogVisible = false
    },
    /**
     * 处理点击单选状态
    */
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
