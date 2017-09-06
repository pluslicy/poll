<template>
  <div class="clazzSetting">
    <div class="ctitle">
      <div class="h2">班级信息设定</div>
      <p>hello world</p>
    </div>
    <div class="ccontent">
      <div class="options">
        <el-button type="default" @click="dialogVisible = true">添加</el-button>
        <el-button type="default" @click="updHandler" :disabled="multipleSelection.length == 0">修改</el-button>
        <el-button type="default" @click="handlerDelete" :disabled="multipleSelection.length == 0">删除</el-button>
      </div>
      <div class="date">
       <el-table :data="getClazzData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column prop="id" type="selection"></el-table-column>
        <el-table-column prop="name" label="班级名称"></el-table-column>
        <el-table-column prop="department" label="班级方向"></el-table-column>
        <el-table-column prop="area" label="学生来源"></el-table-column>
        <el-table-column prop="charge" label="班主任"></el-table-column>
        <el-table-column prop="beginDate" label="开班时间"></el-table-column>
        <el-table-column prop="studentNum" label="班级人数"></el-table-column>
      </el-table>
      </div>
    </div>

    <el-dialog :title="title" :visible.sync="dialogVisible" size="small">
      <el-form :model="form">
        <el-form-item label="班级名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="开班时间" :label-width="formLabelWidth">
           <el-date-picker v-model="form.beginDate" align="right" type="date" placeholder="选择日期" 
           :picker-options="pickerOptions1" :format="dateFormat"></el-date-picker>
        </el-form-item>
         <el-form-item label="学生人数" :label-width="formLabelWidth">
          <el-input v-model="form.studentNum" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="区域" :label-width="formLabelWidth">
          <el-input v-model="form.area" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="班主任" :label-width="formLabelWidth">
          <el-select v-model="form.charge.id" placeholder="请选择">
              <el-option
                v-for="item in teacherData"
                :key="item.id"
                :label="item.username"
                :value="item.id">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属方向" :label-width="formLabelWidth">
          <el-select v-model="form.department.id" placeholder="请选择">
              <el-option
                v-for="item in departmentData"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
          </el-select>
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
      'clazzInfo',
      'getClazzData',
      'departmentData',
      'teacherData'])
  },
  created () {
    this.$store.dispatch('getClazzData');
    this.$store.dispatch('setDepartmentData');
    this.$store.dispatch('fetchTeacherData');
    
  },
  data () {
    return {
      title:"班级信息管理",
      charges:[],     //班主任信息
      departmentes:[],//部门
      showModal : false,
      multipleSelection: [],
      dialogVisible: false,
      formLabelWidth:'120px',
      dateFormat:'yyyy-MM-dd',
      form:{
        id:'',
        name:'',
        area:'',
        studentNum:'',
        beginDate:null,
        charge:{id:''},
        department:{id:''}
      },
      pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        }
    }
  },
  methods:{
    updHandler(){
      this.$store.dispatch('setClazzInfo',this.multipleSelection[0].id).then((resp)=>{
        this.form = this.$store.getters.clazzInfo;
        this.dialogVisible = true;
      });
    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    handlerDelete(){
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var ids = this.multipleSelection.map(function(item){
            return item.id
          });
          this.$store.dispatch('delClazzInfo',ids)
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
    },
    handlerSubmit(){
      this.$store.dispatch('saveClazz',this.form);
      this.form = {
        id:'',
        name:'',
        area:'',
        studentNum:'',
        beginDate:null,
        charge:{id:''},
        department:{id:''}
      },
       //关闭窗口
      this.dialogVisible = false
    },
    handleClose(done){
      //关闭模态框
      done();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './css/clazzSetting.css';
@import '../../components/css/table.css'
</style>
