<template>
  <div class="record">
    <h1>员工档案</h1>
    <Diagram/>
    <div class="progress-wrap">
      <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
    </div>
    <Inputs @getStaffList="getStaffList"/>
    <Stafftab :tableData5="tableData5"/>
    <div class="pagination-wrap">
      <Pagination @getStaffList="getStaffList"/>
    </div>
  </div>
</template>

<script>
import Diagram from './Record/Diagram'
import Stafftab from './Record/StaffTab'
import Inputs from './Record/Inputs'
import Pagination from './Record/Pagination'
export default {
  name: 'record',
  methods: {
    getStaffList ({filters = {}, pageStar = 0, pageSize = 10}) {
      this.$http.post('/api/getStafflist', {
        pageStar: pageStar,
        pageSize: pageSize,
        filters: filters,
        pageAll: false
      }).then(res => {
        this.tableData5 = res
        if (!(filters.length === undefined)) {
          this.tableData5 = filters
        }
      })
    }
  },
  data () {
    return {
      tableData5: [],
      currentPage3: 5,
      pageStar: 0,
      pageSize: 10,
      pageAll: 0
    }
  },
  components: {
    Stafftab,
    Inputs,
    Diagram,
    Pagination
  },
  mounted () {
    this.getStaffList({pageSize: this.pageSize, pageStar: this.pageStar})
  }
}
</script>

<style scoped>
.record{
  width: 100%;
  height: 100%;
  position: relative;
}
.record h1{
  width: 100%;
  height: 60px;
  line-height: 70px;
  font-size: 20px;
  padding-left: 20px;
  font-weight: normal;
  border-bottom: 1px solid #ccc;
}
.record-cont{
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
}
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
.form-wrap{
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}
.btn-wrap{
  width: 100%;
  text-align: right;
}
.pagination-wrap{
  position: absolute;
  left: 0;
  bottom: -100px;
}
.progress-wrap{
  font-size: 14px;
}
</style>
