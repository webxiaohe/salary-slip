<template>
  <div class="staff-tab">
    <el-table
      :data="tableData5"
      style="width: 100%"
      size="mini"
      >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="姓名">
              <span>{{props.row.name}}</span>
            </el-form-item>
            <el-form-item label="手机号">
              <span>{{props.row.tel}}</span>
            </el-form-item>
            <el-form-item label="部门">
              <span>{{props.row.depart}}</span>
            </el-form-item>
            <el-form-item label="职位">
              <span>{{props.row.post}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="手机号"
        prop="tel">
      </el-table-column>
      <el-table-column
        label="姓名"
        prop="name">
      </el-table-column>
      <el-table-column
        label="员工状态"
        prop="status"
        :formatter="getStatus"
        :filters="[{ text: '在职', value: '0' }, { text: '离职', value: '1' }, { text: '开除', value: '2' }]"
        filter-placement="bottom-end">
      </el-table-column>
      <el-table-column
        label="部门"
        prop="depart"
        :filters="[{ text: '技术部', value: '技术部' }, { text: '人事部', value: '人事部' }]"
        filter-placement="bottom-end">
      </el-table-column>
      <el-table-column
        label="职位"
        prop="post"
        :filters="[{ text: 'web前端', value: 'web前端' },
        { text: 'PHP工程师', value: 'PHP工程师' },
        { text: 'JAVA工程师', value: 'JAVA工程师' },
        { text: '产品经理', value: '产品经理' },
        { text: 'IOS工程师', value: 'IOS工程师' }
        ]"
        filter-placement="bottom-end">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native="remove(scope.row, '2')"
          >
            开除
          </el-button>
          <el-button
            type="text"
            size="small"
            @click.native="remove(scope.row, '1')"
          >
            离职
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  props: ['tableData5'],
  name: 'StaffTab',
  methods: {
    getStatus (...rest) {
      let array = ['在职', '离职', '开除']
      return array[rest[2]]
    },
    remove (item, status) {
      this.$http.post('/api/removeStaff', {
        id: item.id,
        status
      }).then(data => {
        // item.status = status
        if (data) {
          item.status = status
        }
      })
    }
  }
}
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
