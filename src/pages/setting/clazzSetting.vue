<template>
  <div class="clazzSetting">
    <div class="ctitle">
      <div class="h2">班级信息设定</div>
      <p>hello world</p>
    </div>
    <div class="ccontent">
      <div class="options">
        <el-button type="default" @click="dialogVisible = true">添加</el-button>
        <el-button type="default" @click="dialogVisible = true">修改</el-button>
        <el-button type="default" @click="dialogVisible = true">删除</el-button>
      </div>
      <div class="date">
       <el-table :data="getClazzData" style="width: 100%" >
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="name" label="班级名称"></el-table-column>
        <el-table-column prop="" label="班级方向"></el-table-column>
        <el-table-column prop="area" label="学生来源"></el-table-column>
        <el-table-column prop="" label="班主任"></el-table-column>
        <el-table-column prop="beginDate" label="开班时间"></el-table-column>
        <el-table-column prop="studentNum" label="班级人数"></el-table-column>
      </el-table>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose" @open="handlerOpen">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import navTab from '../../components/navTab.vue';
import pageModal from '../../components/pageModal';
import store from '../../store';
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
      'getClazzData'])
  },
  created () {
    this.$store.dispatch('getClazzData')
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showModal : false,
      multipleSelection: [],
      dialogVisible: false
    }
  },
  methods:{
    handlerOpen:function(){
      console.log('openning....');
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
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './css/clazzSetting.css';
@import '../../components/css/table.css'
</style>
