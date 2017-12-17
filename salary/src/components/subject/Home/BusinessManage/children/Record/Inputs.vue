<template>
  <div class="form-wrap">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input
          size="mini"
          placeholder="搜索姓名、手机号"
          prefix-icon="el-icon-search">
        </el-input>
      </el-col>
      <el-col :span="18">
        <div class="btn-wrap">
          <el-button size="mini" @click="filterStaff(value)" type="success">搜索</el-button>
          <el-select v-model="value" size="mini" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button size="mini" @click="dialogFormVisible = true">添加员工</el-button>
        </div>
      </el-col>
    </el-row>
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="form.sex" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.tel" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="薪资" :label-width="formLabelWidth">
          <el-input v-model="form.payMoney" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth">
          <el-select v-model="form.depart" placeholder="请选择部门">
            <el-option label="技术部" value="技术部"></el-option>
            <el-option label="人事部" value="人事部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-select v-model="form.post" placeholder="请选择职位">
            <el-option label="web前端" value="web前端"></el-option>
            <el-option label="JAVA工程师" value="JAVA工程师"></el-option>
            <el-option label="PHP工程师" value="PHP工程师"></el-option>
            <el-option label="产品经理" value="产品经理"></el-option>
            <el-option label="IOS工程师" value="IOS工程师"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.startDate"
            type="date"
            placeholder="选择日期"
            default-value="2010-10-01">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addStaff">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Inputs',
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        tel: '',
        depart: '',
        post: '',
        startDate: '',
        workTime: 0,
        payMoney: 0
      },
      formLabelWidth: '120px',
      options: [{
        value: '0',
        label: '在职'
      }, {
        value: '1',
        label: '离职'
      }, {
        value: '2',
        label: '开除'
      }],
      value: ''
    }
  },
  methods: {
    addStaff () {
      this.$http.post('/api/addStaff', this.form).then(data => {
        this.dialogFormVisible = false
        this.$emit('getStaffList', {})
      })
    },
    filterStaff (value) {
      this.$http.post('/api/getStaffAll', {
        val: value
      }).then(res => {
        this.$emit('getStaffList', {
          filters: res
        })
      })
    }
  }
}
</script>

<style scoped>
.form-wrap {
  width: 100%;
}
.form-wrap{
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}
.btn-wrap{
  width: 100%;
  text-align: right;
}
</style>
